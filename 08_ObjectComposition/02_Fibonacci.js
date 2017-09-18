let fib = (function getFiboncacci() {
    let first = 0;
    let second = 0;
    let third = 1;

    return function fibonacci() {
        return third

        first = second;
        second = third;
        third = first + second;
    }
})();