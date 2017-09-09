window.onload = function () {
    subtract();

    function subtract() {
        let num_1 = document.getElementById('firstNumber').value;
        let num_2 = document.getElementById('secondNumber').value;
        let substraction = Number(num_1) - Number(num_2);

        let result = document.getElementById('result');
        result.textContent = substraction;
    }
}
