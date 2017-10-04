let expect = require('chai').expect;
let makeList = require('../AddLeftAddRightClear.js').makeList;

describe("AddLeft/AddRight/Clear tests", function () {
    let list = [];
    beforeEach(function () {
        list = makeList();
    });
    it("Returns empty string if no elements are added", function () {
        expect(list.toString()).to.be.equal('');
    });
    it("Adds numbers to the left", function () {
        list.addLeft(3);
        list.addLeft(2);
        list.addLeft(1);
        list.addLeft(0);
        expect(list.toString()).to.be.equal('0, 1, 2, 3');
    });
    it("Adds numbers to the right", function () {
        list.addRight(0);
        list.addRight(1);
        list.addRight(2);
        list.addRight(3);
        expect(list.toString()).to.be.equal('0, 1, 2, 3');
    });
    it("Executes properly many addLeft and addRight operations combined", function () {
        list.addLeft(0);
        list.addRight(1);
        list.addRight(2);
        list.addLeft(-1);
        expect(list.toString()).to.be.equal('-1, 0, 1, 2');
    });
    it("Clears after operations of adding elements", function () {
        list.addLeft(0);
        list.addRight(1);
        list.clear();
        expect(list.toString()).to.be.equal('');
    });
    it("Clears even if list is empty.", function () {
        expect(list.toString()).to.be.equal('');
    });
});