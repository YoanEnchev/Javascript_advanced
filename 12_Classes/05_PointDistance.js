class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(point1, point2) {
        let x_side = Math.abs(point1.x - point2.x);
        let y_side = Math.abs(point1.y - point2.y);

        let distance = Math.sqrt(x_side * x_side + y_side * y_side);
        return distance;
    }
}