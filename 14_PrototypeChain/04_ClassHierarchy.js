function getClasses() {

    class Figure {
        constructor() {
            if (new.target === Figure) {
                throw new Error('Figure is abstract.')
            }
        }

        get area() {
            let className = this.constructor.name

            switch (className) {
                case 'Circle':
                    return Math.PI * this.radius * this.radius;
                case 'Rectangle':
                    return this.width * this.height;
            }
        }

        toString() {
            let prefix = `${this.constructor.name} - `;
            let props = Object.getOwnPropertyNames(this);
            let propsAndValues = props.map(p => `${p}: ${this[p]}`);

            return prefix + propsAndValues.join(', ');
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this.radius = radius;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height) {
            super();
            this.width = width;
            this.height = height;
        }
    }

    return { Figure, Circle, Rectangle };
}