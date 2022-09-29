let canvas, ctx

const setUp = () => {
  canvas = document.querySelector('#canvas')
  ctx = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  canvas.style.backgroundColor = '#222'
  console.log(canvas.width, canvas.height)
}

const draw = () => {

}

setUp()
draw()
window.addEventListener('resize', setUp)
window.addEventListener('orientationchange', setUp)
