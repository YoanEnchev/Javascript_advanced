let expect = require('chai').expect;
let isOddOrEven = require('../02_EvenOrOdd').isOddOrEven;

describe("Length tests", function () {
    it("detects odd length", function () {
        expect(isOddOrEven('a')).to.be.equal('odd');
    });
    it("detects even length", function () {
        expect(isOddOrEven('ab')).to.be.equal('even');
    });
    it("returns undefined for special cases (not string)", function () {
        expect(isOddOrEven([])).to.be.equal(undefined);
    });
    it("returns even for empty string (length === 0)", function () {
        expect(isOddOrEven('')).to.be.equal('even');
    });
});