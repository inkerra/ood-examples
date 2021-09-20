import { Point } from './Point';

export abstract class Shape {
    protected color: string;
    protected filled: boolean;
    protected points: Array<Point>;

    constructor(points: Array<Point>);
    constructor(points: Array<Point>, color: string, filled: boolean);

    constructor(points: Array<Point>, color?: string, filled?: boolean) {
        if (points.length < 3) {
            throw new Error('At least 3 points are required');
        }
        this.points = points;
        this.color = color || 'green';
        this.filled = (typeof(filled) == 'undefined') ? true : filled;
    }

    public toString(): string {
    return `A Shape with color of ${this.color} and ` + (
        this.filled ? '' : 'not ') + 'filled. Points: ' + this.points.join(', ') + '.';
    }

    public getPerimeter(): number {
      var perimeter = 0;
      for (var i=0; i < this.points.length - 1; i++) {
        perimeter += this.points[i].distance(this.points[i + 1]);
      }
      perimeter += this.points[0].distance(this.points[this.points.length - 1]);
      return perimeter;
    }

    abstract getType(): string;
}
