import { log } from "console";
import chalk from "chalk";
class Shape {
    _color;
    _area = 0;
    constructor(color) {
        this._color = color;
    }
    ;
    getcolor() {
        return this._color;
    }
    ;
    getarea() {
        return this._area;
    }
    ;
    calculateArea() { }
    ;
}
;
class Circle extends Shape {
    _radius;
    constructor(color, radius) {
        super(color);
        this._radius = radius;
        this.calculateArea();
    }
    ;
    calculateArea() {
        this.getarea = () => Math.PI * Math.pow(this._radius, 2);
    }
    ;
}
;
class Square extends Shape {
    _sideLength;
    constructor(color, sideLength) {
        super(color);
        this._sideLength = sideLength;
        this.calculateArea();
    }
    ;
    calculateArea() {
        this.getarea = () => Math.pow(this._sideLength, 2);
    }
    ;
}
;
const redCircle = new Circle("Red", 5);
log(chalk.yellow(`Color:`), chalk.red(`${redCircle.getcolor()}`), chalk.yellow(`, Area:`), chalk.green(`${redCircle.getarea()}`));
const blueSquare = new Square("Blue", 5);
log(chalk.yellow(`Square:`), chalk.blue(`${blueSquare.getcolor()}`), chalk.yellow(`, Area:`), chalk.green(`${blueSquare.getarea()}`));
