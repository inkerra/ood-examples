export class Point {
  x: number;
  y: number;

  constructor();
  constructor(x: number, y: number);

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  public distance(): number;
  public distance(other: Point): number;
  public distance(x: number, y: number): number;

  public distance(arg1: number | Point = 0, arg2: number = 0): number {
    var other;
    if (typeof(arg1) === 'object') {
      other = arg1;
    } else {
      other = new Point(arg1, arg2);
    }
    return Math.sqrt((this.x - other.x) ** 2 + (this.y - other.y) ** 2);
  }
  

  public toString(): string {
    return `(${this.x}, ${this.y})`;
  }
}
