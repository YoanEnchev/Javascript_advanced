function sum() {
    let listOfPrices = document.querySelectorAll('tr td:last-child')
    let sum = 0;

    for (price of listOfPrices) {
        sum += Number(price.textContent);
    }

    document.getElementById('sum').textContent = sum;
}