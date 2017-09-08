function calc() {
    let num_1 = document.getElementById('num1').value;
    let num_2 = document.getElementById('num2').value;

    let sum = Number(num_1) + Number(num_2);
    document.getElementById('sum').value = sum;
}
