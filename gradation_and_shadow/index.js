let canvas, ctx, animationId, lastTime, fps, interval
let x = 100
let y = 0

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
  gradientBackground()
  gradientRect()
  gradientCircle()
  sphere()
}

const run = () => {
  setUp()
  animate(0)
}

const update = () => {
  y += 3
}

const gradientBackground = () => {
  ctx.save()
  // createLinearGradient(startX, startY, endX, endY)
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
  // 色
  gradient.addColorStop(0, "#e3879e")
  gradient.addColorStop(0.4, "#fec0ce")
  gradient.addColorStop(1, "#f1a66a")
  ctx.fillStyle = gradient
  ctx.beginPath()
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.restore()
}

const gradientRect = () => {
  ctx.save()
  ctx.filter = "Blur(5px)"
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
  gradient.addColorStop(0, "#f00")
  gradient.addColorStop(0.2, "#faa")
  gradient.addColorStop(0.4, "#0f0")
  gradient.addColorStop(0.6, "#afa")
  gradient.addColorStop(0.8, "#aaf")
  gradient.addColorStop(1, "#00f")
  ctx.fillStyle = gradient
  ctx.beginPath()
  ctx.fillRect(0, 0, canvas.width / 10, canvas.height)
  ctx.fillRect(canvas.width / 10, y, canvas.width / 10, 100)
  ctx.restore()
}

const gradientCircle = () => {
  ctx.save()
  const radialGradient = ctx.createRadialGradient(canvas.width / 2 - 50, canvas.height / 5 - 50, 20, canvas.width / 2 - 40, canvas.height / 5 - 40, 80)
  radialGradient.addColorStop(0, "#fff")
  radialGradient.addColorStop(0.2, "#f00")
  radialGradient.addColorStop(0.5, "#0f0")
  radialGradient.addColorStop(0.8, "#00f")
  radialGradient.addColorStop(1, "#666")
  ctx.fillStyle = radialGradient
  ctx.beginPath()
  ctx.arc(canvas.width / 2, canvas.height / 5, 80, 0, Math.PI * 2)
  ctx.fill()
  ctx.restore()
}

const sphere = () => {
  ctx.save()
  // ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
  // ctx.beginPath()
  // ctx.ellipse(canvas.width / 2 + 20, canvas.height / 2 + 150, 100, 20, 0, 0, Math.PI * 2)
  // ctx.fill()
  // ctx.shadowColor = "rgba(0, 0, 0, 0.1)"
  // ctx.shadowOffsetX = 90
  // ctx.shadowOffsetY = 90
  // ctx.shadowBlur = 10  ctx.shadowColor = "rgba(0, 0, 0, 0.1)"
  ctx.filter = "drop-shadow(90px 90px 10px rgba(0, 0, 0, 0.1))"
  ctx.shadowOffsetY = 90
  ctx.shadowBlur = 10
  const radialGradient = ctx.createRadialGradient(canvas.width / 2 - 60, canvas.height / 2 - 60, 25, canvas.width / 2 - 50, canvas.height / 2 - 50, 120)
  radialGradient.addColorStop(0, "#fff")
  radialGradient.addColorStop(1, "#aaa")
  ctx.fillStyle = radialGradient
  ctx.beginPath()
  ctx.arc(canvas.width / 2, canvas.height / 2, 100, 0, Math.PI * 2)
  ctx.fill()
  ctx.restore()
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
