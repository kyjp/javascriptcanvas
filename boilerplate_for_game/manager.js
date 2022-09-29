import { Controller } from "./controller.js"
import { Game } from "./game.js"

export class Manager {
  constructor(canvas, ctx) {
    this.canvas = canvas
    this.ctx = ctx
    this.controller = new Controller()
    this.game = new Game(this.canvas, this.ctx, this.controller)
    this.states = ['START', 'PLAY', 'GAMEOVER']
    this.state = this.states[0]
    this.rows = this.createRows()
    this.menuWidth = this.canvas.width / 5
    this.menuHeight = this.canvas.height / 15
    this.backToStartWidth = this.canvas.width / 3
    this.backToStartHeight = this.canvas.height / 15
  }
  draw() {
    if (this.state === this.states[0]) {
      this.showStartPage()
    } else if (this.state === this.states[1]) {
      this.game.draw()
      this.showMessage()
    } else if (this.state === this.states[2]) {
      this.showGameOverPage()
    }
  }
  update() {
    if (this.state === this.states[0]) {
      for (let i = 3; i < 6; i++) {
        this.selectAndPlay(this.rows[i].cx, this.rows[i].cy, i)
      }
    } else if (this.state === this.states[1]) {
      this.game.update()
      if (this.game.gameover) {
        setTimeout(() => {
          this.state = this.states[2]
        }, 800)
      }
    } else if (this.state === this.states[2]) {
      this.game.init()
      this.backToStart(this.rows[6].cx, this.rows[6].cy)
    }
  }

  showStartPage() {
    this.ctx.save()
    this.canvas.style.backgroundColor = '#0d1b2a'
    this.ctx.lineWidth = 8
    this.ctx.lineJoin = 'round'
    this.ctx.textAlign = 'center'
    this.ctx.textBaseline = 'middle'
    //frame
    this.ctx.strokeStyle = '#e0e1dd'
    this.ctx.beginPath()
    this.ctx.rect(this.canvas.width / 6, this.canvas.height / 6, this.canvas.width * 4 / 6, this.canvas.height * 4 / 6)
    this.ctx.stroke()
    // title
    this.ctx.fillStyle = '#f8c537'
    this.ctx.font = `${this.canvas.width / 18}px Candara`
    this.ctx.fillText('GAME TITLE', this.rows[1].cx, this.rows[1].cy)
    //description
    this.ctx.fillStyle = '#ffdda1'
    this.ctx.font = `italic ${this.canvas.width / 45}px Candara`
    this.ctx.fillText('game description: click the box!', this.rows[2].cx, this.rows[2].cy)
    //menu
    this.ctx.font = `italic ${this.canvas.width / 25}px Candara`
    for (let i = 0; i < this.game.menus.length; i++) {
      this.ctx.fillStyle = '#e0e1dd'
      this.ctx.fillText(this.game.menus[i], this.rows[3 + i].cx, this.rows[3 + i].cy)
    }
    this.ctx.fillStyle = '#ffdda1'
    this.ctx.font = `italic ${this.canvas.width / 35}px Candara`
    this.ctx.fillText('Click Menu to Start', this.rows[7].cx, this.rows[7].cy)
    this.ctx.restore()
  }
  showGameOverPage() {
    this.ctx.save()
    this.canvas.style.backgroundColor = '#37723e'
    this.ctx.fillStyle = '#f24333'
    this.ctx.strokeStyle = '#bfbdc1'
    this.ctx.lineWidth = 8
    this.ctx.lineJoin = 'round'
    this.ctx.textAlign = 'center'
    this.ctx.textBaseline = 'middle'
    //frame
    this.ctx.beginPath()
    this.ctx.rect(this.canvas.width / 6, this.canvas.height / 6, this.canvas.width * 4 / 6, this.canvas.height * 4 / 6)
    this.ctx.stroke()
    // GAMEOVER
    this.ctx.font = `${this.canvas.width / 15}px Candara`
    this.ctx.fillText('GAME OVER', this.rows[2].cx, this.rows[2].cy)
    // back to start
    this.ctx.font = `italic ${this.canvas.width / 35}px Candara`
    this.ctx.fillText('Click here to Restart', this.rows[6].cx, this.rows[6].cy)
    this.ctx.restore()
  }
  selectAndPlay(cx, cy, i) {
    if (this.controller.isMouseInsideRect(cx - this.menuWidth / 2, cy - this.menuHeight / 2, this.menuWidth, this.menuHeight)) {
      this.ctx.save();
      this.ctx.lineWidth = 3
      this.ctx.lineJoin = 'round'
      this.ctx.strokeStyle = "#51e5ff"
      this.ctx.beginPath()
      this.ctx.rect(cx - this.menuWidth / 2, cy - this.menuHeight / 2, this.menuWidth, this.menuHeight);
      this.ctx.stroke()
      this.ctx.restore()
      if (this.controller.keys.includes('mousedown')) {
        this.game.menuIndex = i - 3
        this.game.menu = this.game.menus[this.game.menuIndex]
        setTimeout(() => {
          this.state = this.states[1]
        }, 800)
      }
    }
  }
  backToStart(cx, cy) {
    if (this.controller.isMouseInsideRect(cx - this.backToStartWidth / 2, cy - this.backToStartHeight / 2, this.backToStartWidth, this.backToStartHeight)) {
      this.ctx.save();
      this.ctx.lineWidth = 3
      this.ctx.lineJoin = 'round'
      this.ctx.strokeStyle = "#e3e36a"
      this.ctx.beginPath()
      this.ctx.rect(cx - this.backToStartWidth / 2, cy - this.backToStartHeight / 2, this.backToStartWidth, this.backToStartHeight);
      this.ctx.stroke()
      this.ctx.restore()
      if (this.controller.keys.includes('mousedown')) {
        setTimeout(() => {
          this.state = this.states[0]
        }, 800)
      }
    }
  }
  createRows() {
    const rows = [];
    // 現在は8分割としている
    const h = this.canvas.height * 4 / 6 / 8;
    for (let i = 0; i < 8; i++) {
      const row = { cx: this.canvas.width / 2, cy: this.canvas.height / 6 + h * i + h / 2 };
      rows.push(row);
    }
    return rows
  }
  showMessage() {
    this.ctx.save();
    this.ctx.fillStyle = "rgba(100, 100, 100, 0.5)";
    this.ctx.textAlign = "left";
    this.ctx.textBaseline = "top";
    this.ctx.font = `${this.canvas.width / 45}px Candara`;
    this.ctx.fillText("Press 'p' to pause", 20, 20);
    this.ctx.restore();
  }
}
