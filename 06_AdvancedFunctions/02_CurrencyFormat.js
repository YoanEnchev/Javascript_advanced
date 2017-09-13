printFormatedDollar(5);

function printFormatedDollar(value) {
    let formated = dolarFormater(value);
    console.log(formated);

    function dolarFormater(value) {
        return currencyFormatter(',', '$', true, value);
    }

    function currencyFormatter(separator, symbol, symbolFirst, value) {
        let result = Math.trunc(value) + separator;
        result += value.toFixed(2).substr(-2, 2);
        if (symbolFirst) return symbol + ' ' + result;
        else return result + ' ' + symbol;
    }
}
