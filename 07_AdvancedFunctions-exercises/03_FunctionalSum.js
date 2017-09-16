console.log(add(1)(6)(-3));

function add(number) {
    let sum = number;

    function calc(number) {
        sum += number;
        return calc;
    }

    calc.toString = function () {
        return sum;
    }

    return calc;
}
