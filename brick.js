class Brick {
  constructor() {
    this.r = random(20, 80)
    this.pos = createVector(random(100, width - 100), random(100, height - 400))
    this.total = 6
  }

  display() {
    push()
    translate(this.pos.x, this.pos.y)
    beginShape()
    for (let i = 0; i < this.total; i++) {
      const angle = map(i, 0, this.total, 0, TWO_PI)
      const x = this.r * cos(angle)
      const y = this.r * sin(angle)
      vertex(x, y)
    }
    endShape(CLOSE)
    pop()
  }
}
