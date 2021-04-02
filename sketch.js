let paddle
let ball
const bricks = []

let playingGame = false
let win = false
let winText

function setup() {
  createCanvas(windowWidth, windowHeight)
  paddle = new Paddle(160, 20)
  ball = new Ball()
  for (let i = 0; i < 2; i++) {
    bricks.push(new Brick())
  }
  createText()
}

function draw() {
  background(255)

  paddle.display()

  if (playingGame) paddle.update()
  if (playingGame) paddle.checkEdges()

  ball.display()

  if (playingGame) ball.update()
  if (playingGame) ball.checkEdges()

  if (ball.meets(paddle) && ball.direction.y > 0) {
    ball.direction.y *= -1
  }

  bricks.forEach((brick, i) => {
    if (ball.hits(brick)) {
      if (brick.r > 40) {
        brick.r = brick.r / 2
      } else {
        bricks.splice(i, 1)
      }
      ball.direction.y *= -1
    }
    brick.display()
  })

  if (ball.pos.y > height) {
    playingGame = false
    ball.pos = createVector(width / 2, height / 2)
  }

  if (bricks.length === 0) {
    win = true
    playingGame = false
  }

  if (win) {
    winText.style('display', 'block')
  } else {
    winText.style('display', 'none')
  }
}

function keyPressed() {
  const pressedKey = key.toUpperCase()
  if (pressedKey === 'A') {
    paddle.isMovingLeft = true
  } else if (pressedKey === 'D') {
    paddle.isMovingRight = true
  } else if (pressedKey === 'S') {
    playingGame = true
    win = false
    if (bricks.length === 0) {
      for (let i = 0; i < 20; i++) {
        bricks.push(new Brick())
      }
    }
  }
}

function keyReleased() {
  paddle.isMovingLeft = false
  paddle.isMovingRight = false
}

function createText() {
  winText = createP('YOU WIN')
  winText.position(width / 2 - 50, 80)
}
