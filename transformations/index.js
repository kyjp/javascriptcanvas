let canvas, ctx, animationId, lastTime, fps, interval
let x = 100
let angle

const setUp = () => {
  canvas = document.querySelector('#canvas')
  ctx = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  canvas.style.backgroundColor = '#222'
  ctx.fillStyle = '#fff'
  ctx.strokeStyle = '#fff'
  ctx.translate(canvas.width / 2, canvas.height / 2)
  animationId = null
  lastTime = 0
  fps = 30
  interval = 1000 / fps
  angle = 0
  console.log(canvas.width, canvas.height)
}

const draw = () => {
  // translateSample()
  // rotateSample()
  // scaleSample()
  transformationSample()
}

const drawArrow = () => {
  ctx.textAlign = 'left'
  ctx.textBaseline = 'middle'
  ctx.font = '120px monospace'
  ctx.fillText(' →', 300, 0)
  ctx.beginPath()
  ctx.moveTo(0, 0)
  ctx.lineTo(300, 0)
  ctx.stroke()
}

const translateSample = () => {
  ctx.save()
  ctx.translate(100, 100)
  drawArrow()
  ctx.translate(200, 200)
  drawArrow()
  ctx.restore()
  ctx.save()
  ctx.fillStyle = '#0fa'
  ctx.translate(200, 200)
  drawArrow()
  ctx.restore()
}

const rotateSample = () => {
  ctx.save()
  ctx.translate(canvas.width / 2, canvas.height / 2)
  drawArrow()
  ctx.rotate(Math.PI / 6)
  drawArrow()
  ctx.rotate(Math.PI / 6)
  drawArrow()
  ctx.beginPath()
  ctx.arc(-300, 0, 50, 0, Math.PI * 2)
  ctx.fill()
  ctx.restore()
}

const scaleSample = () => {
  ctx.save()
  ctx.translate(canvas.width / 2, canvas.height / 2)
  drawArrow()
  ctx.rotate(Math.PI)
  // 拡大
  ctx.scale(1.5, 5)
  drawArrow()
  ctx.restore()
}

const transformationSample = () => {
  ctx.save()
  ctx.rotate(angle)
  ctx.translate(300 * Math.sin(angle / 2), 300)
  ctx.scale(Math.sin(angle * 3) + 1, Math.cos(angle) + 1)
  ctx.fillRect(-50, -50, 100, 100)
  ctx.restore()
}

const run = () => {
  setUp()
  animate(-50, -50, 100, 100)
}

const update = () => {
  angle += 0.05
}

const animate = (timestamp) => {
  if (timestamp - lastTime > interval) {
    ctx.clearRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height)
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
