let expect = require('chai').expect;
let sum = require('../04_SumOfNumbers').sum;

describe("Sum tests", function () {
    it("should return 3 for [1, 2]", function () {
        expect(sum([1, 2])).to.be.equal(3);
    });
    it("should work with negative numbers", function () {
        expect(sum([-1, -2])).to.be.equal(-3);
    });
    it("should return 0 for []", function () {
        expect(sum([])).to.be.equal(0);
    });
    it("should work with numbers as string", function () {
        expect(sum(['1', '2', 3])).to.be.equal(6);
    });
    it("should work with floating point numbers", function () {
        expect(sum([1.5, 3.4])).to.be.equal(4.9);
    });
});