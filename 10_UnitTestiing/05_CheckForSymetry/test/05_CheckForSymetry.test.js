let expect = require('chai').expect;
let isSymmetric = require('../05_CheckForSymetry').isSymmetric;

describe("symetry tests", function () {
    it("non arrays are not symmetric", function () {
        expect(isSymmetric('not array')).to.be.false;
    });
    it("single element array is symmetric", function () {
        expect(isSymmetric([1])).to.be.true;
    });
    it("odd length symmetry", function () {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    });
    it("even length symmetry", function () {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });
    it("odd length unsymmetry", function () {
        expect(isSymmetric([1, 2, 1, 1])).to.be.false;
    });
    it("even length unsymmetry", function () {
        expect(isSymmetric([2, 1, 1, 1])).to.be.false;
    });
    it("empty array should be symetric", function () {
        expect(isSymmetric([])).to.be.true;
    });
    it("should return true for [5,'hi',{a:5},new Date(),{a:5},'hi',5]", function () {
        expect(isSymmetric([5, 'hi', { a: 5 }, new Date(), { a: 5 }, 'hi', 5])).to.be.equal(true);
    });
});