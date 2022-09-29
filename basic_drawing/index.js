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
  // // 枠線の色の設定
  // ctx.strokeStyle = '#fff'
  // // 新しい図形描画を始める（ctx.stroke()までで一つの区切り）
  // ctx.beginPath()
  // // square: ctx.rect(startX, startY, width, height)
  // ctx.rect(100, 100, 100, 100)
  // // 枠線を線で描く

  // ctx.stroke()
  // ctx.beginPath()
  // ctx.rect(300, 300, 100, 100)
  // ctx.stroke()

  // // 塗りつぶしの色
  // ctx.fillStyle = '#fff'
  // ctx.beginPath()
  // ctx.rect(200, 100, 100, 100)
  // // 塗りつぶしで描く
  // ctx.fill()

  // ctx.beginPath()
  // // 座標とサイズを指定して塗りつぶしで描く
  // ctx.fillRect(300, 100, 100, 100)

  // ctx.fillStyle = '#fff'
  // ctx.beginPath()
  // // 円を描く circle: ctx.rect(centerX, centerY, radius, startAngle, endAngle, anti-clock-wise)
  // ctx.arc(500, 200, 100, 0, Math.PI * 2)
  // ctx.fill()

  // ctx.strokeStyle = '#fff'
  // ctx.beginPath()
  // ctx.arc(canvas.width / 2, canvas.height / 2, 100, 0, Math.PI * 2)
  // ctx.stroke()
  // // 新たな描画設定を始める
  // ctx.save()
  // ctx.strokeStyle = '#0fa'
  // // 線の太さ
  // ctx.lineWidth = 10
  // ctx.beginPath()
  // ctx.arc(canvas.width / 2, canvas.height / 2, 150, 0, Math.PI * 2)
  // ctx.stroke()
  // // 描画設定をsave以前の状態に戻す
  // ctx.restore()
  // ctx.beginPath()
  // ctx.arc(canvas.width / 2, canvas.height / 2, 200, 0, Math.PI * 2)
  // ctx.stroke()

  // ctx.strokeStyle = '#0fa'
  // ctx.beginPath()
  // // 楕円を描く 5つめのパラメータに回転の角度を入力
  // ctx.ellipse(canvas.width / 2, canvas.height / 2, 150, 50, Math.PI / 3, 0, Math.PI * 2)
  // ctx.stroke()

  // ctx.strokeStyle = '#fff'
  // ctx.fillStyle = '#00f'
  // ctx.lineWidth = 3
  // ctx.beginPath()
  // // 始点
  // ctx.moveTo(200, 200)
  // // 終点
  // ctx.lineTo(500, 500)
  // ctx.lineTo(700, 300)
  // // pathを閉じる
  // ctx.closePath()
  // ctx.fill()
  // ctx.stroke()

  // ctx.strokeStyle = '#fff'
  // ctx.fillStyle = '#0fa'
  // ctx.lineWidth = 1
  // // サイズとfont familyを選択
  // ctx.font = '80px Candara'
  // //文字を縁取るように描く (text, X座標, Y座標)
  // ctx.strokeText('hello', 300, 300)
  // //文字を塗りつぶしてに描く (text, X座標, Y座標)
  // ctx.fillText('canvas', 300, 500)

  ctx.strokeStyle = '#fff'
  ctx.beginPath()
  ctx.moveTo(400, 100)
  ctx.lineTo(400, 500)
  ctx.stroke()
  ctx.beginPath()
  ctx.moveTo(200, 300)
  ctx.lineTo(600, 300)
  ctx.stroke()
  ctx.fillStyle = '#0fa'
  ctx.font = '80px Candara'
  // テキストの始点の変更
  ctx.textAlign = 'right' // left, center
  ctx.textBaseline = 'top' // middle
  ctx.fillText('Canvas', 400, 300)
}

const run = () => {
  setUp()
  draw()
}

run()
window.addEventListener('resize', run)
window.addEventListener('orientationchange', run)
