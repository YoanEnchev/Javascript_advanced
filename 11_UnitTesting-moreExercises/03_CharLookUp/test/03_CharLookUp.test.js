let expect = require('chai').expect;
let lookupChar = require('../03_CharLookUp').lookupChar;

describe("Retrieving character tests", function () {
    it("Returns undefined if first parameter is not a string", function () {
        expect(lookupChar([], 5)).to.be.equal(undefined);
    });
    it("Returns undefined if second parameter is not a number", function () {
        expect(lookupChar("string", {})).to.be.equal(undefined);
    });
    it("Returns undefined if second parameter is not an integer number", function () {
        expect(lookupChar("string", 3.14)).to.be.equal(undefined);
    });
    it("Returns 'Incorect index' if index is larger then string's length", function () {
        expect(lookupChar("abc", 5)).to.be.equal("Incorrect index");
    });
    it("Returns 'Incorect index' if index equals to string's length", function () {
        expect(lookupChar("abc", 3)).to.be.equal("Incorrect index");
    });
    it("Returns 'Incorect index' if index is less than zero", function () {
        expect(lookupChar("abc", -1)).to.be.equal("Incorrect index");
    });
    it("Returns first character if index equals 0", function () {
        expect(lookupChar("abc", 0)).to.be.equal("a");
    });
    it("Returns last character if index equals string length - 1", function () {
        expect(lookupChar("abc", 2)).to.be.equal("c");
    });
    it("Returns middle character correctly", function () {
        expect(lookupChar("abc", 1)).to.be.equal("b");
    });
});