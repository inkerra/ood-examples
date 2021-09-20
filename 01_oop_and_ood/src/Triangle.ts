import { Point } from './Point';
import { Shape } from './Shape';


const TOLERANCE = 0.001;


export class Triangle extends Shape {
    constructor(a: Point, b: Point, c: Point);
    constructor(a: Point, b: Point, c: Point, color: string, filled: boolean);

    constructor(a: Point, b: Point, c: Point, color?: string, filled?: boolean) {
        super([a, b, c], color, filled);
    }

    public toString(): string {
      return `Triangle[v1=${this.points[0]},v2=${this.points[1]},v3=${this.points[2]}]`;
    }

    public getType(): string {
      var ab = this.points[0].distance(this.points[1]);
      var bc = this.points[1].distance(this.points[2]);
      var ca = this.points[2].distance(this.points[0]);
      var type = 'scalene';
      if (this.eq(ab, bc) && this.eq(bc, ca)) {
          type = 'equilateral';
      } else if (this.eq(ab, bc) || this.eq(ab, ca) || this.eq(bc, ca)) {
          type = 'isosceles';
      }
      return `${type} triangle`;
    }

    private eq(side1: number, side2: number): boolean {
        return Math.abs(side1 - side2) < TOLERANCE;
    }
}
