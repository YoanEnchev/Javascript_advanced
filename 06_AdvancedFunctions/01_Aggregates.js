let numbers = [2, 3, 10, 5];

solve(numbers);

function solve(numbers) {
    let sum = numbers.reduce((a, b) => a + b);
    let min = numbers.reduce((a, b) => Math.min(a, b));
    let max = numbers.reduce((a, b) => Math.max(a, b));
    let product = numbers.reduce((a, b) => a * b);
    let join = numbers.reduce((a, b) => "" + a + b);

    console.log(`Sum = ${sum}`);
    console.log(`Min = ${min}`);
    console.log(`Max = ${max}`);
    console.log(`Product = ${product}`);
    console.log(`Join = ${join}`);
}