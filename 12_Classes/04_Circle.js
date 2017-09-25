class Circle {
    constructor(radius, color) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    set diameter(diameter) {
        this.radius = diameter / 2;
    }

    get area() {
        return Math.PI * this.radius * this.radius;
    }
}

let c = new Circle(2);

