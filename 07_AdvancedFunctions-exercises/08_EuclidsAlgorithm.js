greatestCommonDivisor(252, 105);

function greatestCommonDivisor(num1, num2) {
    let biggerNumber = Math.max(num1, num2);
    let smallerNumber = Math.min(num1, num2);
    let previous;

    while (biggerNumber % smallerNumber !== 0) {
        previous = smallerNumber;

        smallerNumber = biggerNumber % smallerNumber;
        biggerNumber = previous;
    }

    return smallerNumber;
}