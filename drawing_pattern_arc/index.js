import Ripple from './ripple.js'
let canvas, ctx, ripples

const createRipples = (n) => {
  const ripples = []
  for (let i = 0; i < n; i++) {
    const ripple = new Ripple(canvas, ctx)
    ripples.push(ripple)
  }
  return ripples
}

const setUp = () => {
  canvas = document.querySelector('#canvas')
  ctx = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  canvas.style.backgroundColor = '#222'
  console.log(canvas.width, canvas.height)
  ripples = createRipples(8)
  console.log(ripples)
}

const draw = (ripples) => {
  ripples.forEach(ripple => {
    ripple.draw()
  });
}

const run = () => {
  setUp()
  draw(ripples)
}

run()

setInterval(() => {
  run()
}, 1000);
window.addEventListener('resize', run)
window.addEventListener('orientationchange', run)
