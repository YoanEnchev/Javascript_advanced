(function addProperties() {

    Array.prototype.last = function () {
        return this[this.length - 1];
    }

    Array.prototype.skip = function (n) {
        return this.slice(n);
    }

    Array.prototype.take = function (n) {
        return this.slice(0, n);
    }

    Array.prototype.sum = function () {
        let sum = this.reduce((a, b) => a + b);
        return sum;
    }

    Array.prototype.average = function () {
        let sum = this.sum();
        let average = sum / this.length;
        return average;
    }
})();

let arr = [1, 2, 3];
console.log(arr.average());

