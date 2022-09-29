export class Controller {
  constructor() {
    this.keys = []
    this.mouse = { x: null, y: null }
  }
  getMousePosition() {
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX
      this.mouse.y = e.clientY
      this.availableKeys = ['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLefrt', ' ', 'Enter', 'p', 'o']
      // console.log(mouse)
      this.pause = false
    })
  }
  isMouseInsideRect(sx, sy, w, h) {
    if (sx < this.mouse.x && this.mouse.x < sx + w && sy < this.mouse.y && this.mouse.y < sy + h) {
      return true
    }
    return false
  }

  addKeys() {
    window.addEventListener('keydown', (e) => {
      console.log('controller: addKeys method')
      if (this.availableKeys.includes(e.key)) {
        if (!this.keys.includes(e.key)) {
          this.keys.push(e.key)
          // console.log(`controller: availablekey ${e.key}`)
          // console.log(this.keys)
        }
      }
    })
  }

  addMouseDown() {
    window.addEventListener('mousedown', () => {
      if (!this.keys.includes('mousedown')) {
        this.keys.push('mousedown')
        // console.log('mouseDown', this.keys)
      }
    })
  }
  clearKeys() {
    window.addEventListener('mouseup', () => {
      this.keys.length = 0
      // console.log('clear', this.keys)
    })
    window.addEventListener('keyup', () => {
      this.keys.length = 0
    })
  }
}
