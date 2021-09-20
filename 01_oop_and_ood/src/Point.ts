export class Point {
  x: number;
  y: number;

  constructor();
  constructor(x: number, y: number);

  constructor(x?: number, y?: number) {
    this.x = x || 0;
    this.y = y || 0;
  }

  public distance(): number;
  public distance(other: Point): number;
  public distance(x: number, y: number): number;

  public distance(arg1?: number | Point, arg2?: number): number {
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
