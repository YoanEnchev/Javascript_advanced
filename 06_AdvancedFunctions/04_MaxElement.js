let numbers = [1, 44, 123, 33];
let maxNum = maxElement;

console.log(maxNum);

function maxElement(numbers) {
    return Math.max.apply(null, numbers);
} 