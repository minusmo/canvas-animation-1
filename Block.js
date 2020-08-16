export class Block {
  constructor(width, height, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.maxX = width + x;
    this.maxY = height + y;
  }

  draw(ctx) {
    // const xGap = 60;
    // const yGap = 60;

    ctx.fillStyle = "#58B19F";
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fill();
  }
}
