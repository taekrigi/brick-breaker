class Ball {
  constructor() {
    this.pos = createVector(width / 2, height / 2)
    this.r = 30
    this.direction = createVector(1, 1)
    this.vel = createVector(1, 1).mult(8)
  }

  display() {
    ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2)
  }

  update() {
    this.pos.x += this.vel.x * this.direction.x
    this.pos.y += this.vel.y * this.direction.y
  }

  checkEdges() {
    if (this.pos.y < this.r && this.direction.y < 0) {
      this.direction.y *= -1
    } else if (this.pos.x < this.r && this.direction.x < 0) {
      this.direction.x *= -1
    } else if (this.pos.x > width - this.r && this.direction.x > 0) {
      this.direction.x *= -1
    }
  }

  meets(paddle) {
    return (
      this.pos.y < paddle.pos.y &&
      this.pos.y > paddle.pos.y - this.r &&
      this.pos.x > paddle.pos.x - this.r &&
      this.pos.x < paddle.pos.x + paddle.w + this.r
    )
  }

  hits(brick) {
    return (
      dist(this.pos.x, this.pos.y, brick.pos.x, brick.pos.y) < brick.r + this.r
    )
  }
}
