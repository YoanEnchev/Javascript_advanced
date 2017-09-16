(function solve(a, b) {

    let solution = {
        add: function (a, b) {
            let sum_1 = a[0] + b[0];
            let sum_2 = a[1] + b[1];

            return [sum_1, sum_2];
        },

        multiply: function (a, b) {
            let product_1 = a[0] * b;
            let product_2 = a[1] * b;

            return [product_1, product_2];
        },

        length: function (a) {
            let side_1 = a[0] * a[0];
            let side_2 = a[1] * a[1];

            return Math.sqrt(side_1 + side_2);
        },

        dot: function (a, b) {
            let dot = (a[0] * b[0]) + (a[1] * b[1]);
            return dot;
        },

        cross: function (a, b) {
            let cross_1 = a[0] * b[1];
            let cross_2 = a[1] * b[0];

            return cross_1 - cross_2;
        }
    }

    return solution;
})()


