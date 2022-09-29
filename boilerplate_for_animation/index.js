let canvas, ctx, animationId, lastTime, fps, interval
let x = 100

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
  console.log(canvas.width, canvas.height)
}

const draw = () => {
  ctx.beginPath()
  ctx.rect(x, 100, 200, 200)
  ctx.fill()
}

const run = () => {
  setUp()
  animate(0)
}

const update = () => {
  x += 5
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
