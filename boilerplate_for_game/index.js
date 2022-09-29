import { Game } from './game.js'
import { Manager } from './manager.js'
let canvas, ctx, animationId, lastTime, fps, interval, manager

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
  manager = new Manager(canvas, ctx)
  manager.controller.getMousePosition()
  manager.controller.addMouseDown()
  manager.controller.clearKeys()
  manager.controller.addKeys()
}

const pauseControl = () => {
  if (manager.state === manager.states[1]) {
    if (manager.controller.keys.includes('p') && !manager.controller.pause) {
      manager.controller.pause = true
      ctx.save()
      ctx.fillStyle = "rgba(100, 0, 100, 0.5)"
      ctx.font = `italic ${canvas.width / 15}px Candara`
      ctx.fillText("PAUSE", canvas.width / 2, canvas.height / 2)
      ctx.font = `italic ${canvas.width / 20}px Candara`
      ctx.fillText("Press 'o' to Resume", canvas.width / 2, canvas.height * 2 / 3)
      ctx.restore()
    }
    if (manager.controller.keys.includes('o')) {
      manager.controller.pause = false
    }
  }
}

const draw = () => {
  manager.draw()
}

const run = () => {
  setUp()
  animate(0)
}

const update = () => {
  manager.update()
}

const animate = (timestamp) => {
  pauseControl()
  if (!manager.controller.pause) {
    if (timestamp - lastTime > interval) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      draw()
      update()
      lastTime = timestamp
    }
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
