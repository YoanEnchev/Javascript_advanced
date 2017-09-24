let expect = require('chai').expect;
let mathEnforcer = require('../04_MathEnforcer').mathEnforcer;

describe("Math enforcer tests:", function () {
    describe("addFive function tests", function () {
        it("Should return undefined if parameter is NaN", function () {
            expect(mathEnforcer.addFive([])).to.be.equal(undefined);
        });
        it("Should add 5 to the parameter if it is an integer number", function () {
            expect(mathEnforcer.addFive(1)).to.be.equal(6);
        });
        it("Should add 5 to the parameter if it is a floating point number", function () {
            expect(mathEnforcer.addFive(3.14)).to.be.closeTo(8.14, 0.01);
        });
        it("Should add 5 to negative number as parameter", function () {
            expect(mathEnforcer.addFive(-3)).to.be.equal(2);
        });
    });
    describe("subtractTen function tests", function () {
        it("Should return undefined if parameter is NaN", function () {
            expect(mathEnforcer.subtractTen({})).to.be.equal(undefined);
        });
        it("Should subtract 10 from the parameter if it is an integer number", function () {
            expect(mathEnforcer.subtractTen(1)).to.be.equal(-9);
        });
        it("Should subtract 10 from the parameter if it is a floating point number", function () {
            expect(mathEnforcer.subtractTen(10.11)).to.be.closeTo(0.11, 0.01);
        });
        it("Should subtract 10 from negative number as parameter", function () {
            expect(mathEnforcer.subtractTen(-1)).to.be.equal(-11);
        });
    });
    describe("sum function tests", function () {
        it("Should return undefined if first parameter is NaN", function () {
            expect(mathEnforcer.sum([], 5)).to.be.equal(undefined);
        });
        it("Should return undefined if second parameter is NaN", function () {
            expect(mathEnforcer.sum(1, {})).to.be.equal(undefined);
        });
        it("Should sum integer numbers", function () {
            expect(mathEnforcer.sum(1, 2)).to.be.equal(3);
        });
        it("Should sum floating point numbers", function () {
            expect(mathEnforcer.sum(3.14, 3.15)).to.be.closeTo(6.29, 0.01);
        });
        it("Should sum negative numbers", function () {
            expect(mathEnforcer.sum(-3.14, -3.15)).to.be.closeTo(-6.29, 0.01);
        });
    });
});