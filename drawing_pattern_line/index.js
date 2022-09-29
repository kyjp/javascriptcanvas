import Lint from './lint.js'
let canvas, ctx, lints

const createLints = (n) => {
  const lints = []
  for (let i = 0; i < n; i++) {
    const lint = new Lint(canvas, ctx)
    lints.push(lint)
  }
  return lints
}

const setUp = () => {
  canvas = document.querySelector('#canvas')
  ctx = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  canvas.style.backgroundColor = '#222'
  console.log(canvas.width, canvas.height)
  lints = createLints(10)
}

const erase = (x, y) => {
  ctx.clearRect(x, y, 50, 50)
}

const draw = () => {
  lints.forEach(lint => {
    lint.draw()
  })
}

const run = () => {
  setUp()
  draw()
}

run()
window.addEventListener('resize', run)
window.addEventListener('orientationchange', run)
window.addEventListener('click', e => {
  // 描画の削除
  erase(e.clientX, e.clientY)
  lints.forEach((lint, index) => {
    // const dist = Math.sqrt((e.clientX - lint.x) ** 2 + (e.clientY - lint.y) ** 2)
    // if (dist < 50) {
    //   // インスタンスの削除
    //   lints.splice(index, 1)
    // }
    lint.update(e.clientX, e.clientY)
    lints = lints.filter(lint => !lint.isErased)
  })
})
