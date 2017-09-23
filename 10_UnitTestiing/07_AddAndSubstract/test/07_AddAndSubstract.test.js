let expect = require('chai').expect;
let createCalculator = require('../07_AddAndSubstract').createCalculator;

describe("calculator tests", function () {
    let calculator;

    beforeEach(function () {
        calculator = createCalculator(); //resets calculator
    });

    it("Initial value should be zero", function () {
        expect(calculator.get()).to.be.equal(0);
    });
    it("Should add positive numbers: 2 + 3 = 5", function () {
        calculator.add(2);
        calculator.add(3);
        expect(calculator.get()).to.be.equal(5);
    });
    it("Should subtract positive numbers: -2 - 3 = -5", function () {
        calculator.subtract(2);
        calculator.subtract(3);
        expect(calculator.get()).to.be.equal(-5);
    });
    it("Should add negative numbers: -2 + (-3) = -5", function () {
        calculator.add(-2);
        calculator.add(-3);
        expect(calculator.get()).to.be.equal(-5);
    });
    it("Should subtract negative numbers: -(-2) - (-3) = 2 + 3 = 5", function () {
        calculator.subtract(-2);
        calculator.subtract(-3);
        expect(calculator.get()).to.be.equal(5);
    });
    it("Mix of subtract and add operation, positive and negative numbers and zero", function () {
        calculator.subtract(-2);
        calculator.subtract(-3);
        calculator.subtract(0);
        calculator.add(-2);
        calculator.add(-3);
        expect(calculator.get()).to.be.equal(0);
    });
    it("Should operate with floating numbers", function () {
        calculator.add(1);
        expect(calculator.get()).to.be.equal(1);
        calculator.add(2);
        expect(calculator.get()).to.be.equal(3);
        calculator.subtract(3);
        expect(calculator.get()).to.be.equal(0);
        calculator.subtract(-10);
        expect(calculator.get()).to.be.equal(10);
        calculator.subtract(3.14);
        expect(calculator.get()).to.be.closeTo(6.86, 0.01);
    });
    it("Should return NaN for invalid input", function () {
        calculator.add('invalid');
        expect(calculator.get()).to.be.NaN;
    })
    it("Should add with numbers to string", function () {
        calculator.add('5');
        calculator.add('15');
        expect(calculator.get()).to.be.equal(20);
    })
    it("Should subtract with numbers to string", function () {
        calculator.subtract('5');
        calculator.subtract('15');
        expect(calculator.get()).to.be.equal(-20);
    })
});
