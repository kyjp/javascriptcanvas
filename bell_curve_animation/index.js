let canvas, ctx, animationId, lastTime, fps, interval
let numOfCols, barWidth, marginX, values

const setUp = () => {
  canvas = document.querySelector('#canvas')
  ctx = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  canvas.style.backgroundColor = '#222'
  ctx.fillStyle = '#fff'
  ctx.strokeStyle = '#fff'
  animationId = null
  lastTime = 0
  fps = 30
  interval = 1000 / fps
  numOfCols = 300
  barWidth = Math.floor(canvas.width / numOfCols)
  marginX = canvas.width - barWidth * numOfCols
  values = new Array(numOfCols).fill(0)
}

const update = () => {
  updateValues(100, 5)
}

const pickUpIndex = (req) => {
  let total = 0
  // const value1 = Math.random()
  // const value2 = Math.random()
  // total = value1 + value2
  // const average = total / 2
  for (let i = 0; i < req; i++) {
    total += Math.random()
  }
  const average = total / req
  const index = Math.floor(average * numOfCols)
  return index
}

const updateValues = (n, req) => {
  for (let i = 0; i < n; i++) {
    const index = pickUpIndex(req)
    values[index] += 1
  }
}

const drawBar = () => {
  for (let i = 0; i < numOfCols; i++) {
    const barHeight = values[i]
    ctx.beginPath()
    ctx.fillRect(marginX / 2 + barWidth * i, canvas.height, barWidth, - barHeight)
  }
}

const draw = () => {
  drawBar()
}

const run = () => {
  setUp()
  animate(0)
}

const animate = (timestamp) => {
  if (timestamp - lastTime > interval) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    draw()
    update()
    lastTime = timestamp
  }
  // アニメーションを繰り返し実行
  animationId = requestAnimationFrame(animate)
}

run()
window.addEventListener('resize', run)
window.addEventListener('orientationchange', run)
// window.addEventListener('click', () => {
//   if (animationId) {
//     cancelAnimationFrame(animationId)
//     animationId = null
//   } else {
//     animate(0)
//   }
// })
