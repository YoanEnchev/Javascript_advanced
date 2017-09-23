subsum([10, 20, 30, 40, 50, 60], 3, 5)

function subsum(array, startIndex, endIndex) {
    if (!Array.isArray(array)) {
        return NaN;
    }

    let onlyNumbers = array.filter(e => e === Number(e));

    if (onlyNumbers.length !== array.length) {
        return NaN;
    }

    if (array.length === 0) {
        return 0;
    }

    if (startIndex < 0) {
        startIndex = 0;
    }

    if (endIndex > array.length - 1) {
        endIndex = array.length - 1;
    }

    let numbersToSum = array.splice(startIndex, endIndex + 1);
    let sum = numbersToSum.reduce((a, b) => a + b);

    if (sum !== Math.trunc(sum)) { //has floating point
        sum = Number(sum.toFixed(2));
    }

    return sum;
}
