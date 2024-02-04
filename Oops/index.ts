import { log } from "console";
import chalk from "chalk"

abstract class Shape {
    private _color: string;
    private _area: number = 0;
    constructor(color: string){
        this._color = color;
    };
    public getcolor(): string {
        return this._color;
    };
    public getarea(): number {
        return this._area
    };
    calculateArea(): void {};
};
class Circle extends Shape {
    private _radius: number;
    constructor(color: string, radius: number){
        super(color);
        this._radius = radius;
        this.calculateArea();
    };
    calculateArea(): void {
        this.getarea = () => Math.PI * Math.pow(this._radius, 2);
    };
};
class Square extends Shape {
    private _sideLength: number;
    constructor(color: string, sideLength: number){
        super(color);
        this._sideLength = sideLength;
        this.calculateArea();
    };
    calculateArea(): void {
        this.getarea = () => Math.pow(this._sideLength, 2);
    };
};
const redCircle = new Circle("Red", 5);
log(chalk.yellow(`Color:`), chalk.red(`${redCircle.getcolor()}`), chalk.yellow(`, Area:`), chalk.green(`${redCircle.getarea()}`));
const blueSquare = new Square("Blue", 5);
log(chalk.yellow(`Square:`), chalk.blue(`${blueSquare.getcolor()}`), chalk.yellow(`, Area:`), chalk.green(`${blueSquare.getarea()}`));
