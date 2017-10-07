let expect = require('chai').expect;
let createList = require('../Add_Swap_ShiftLeft_ShiftRight_InList.js').createList;

describe(" list tests", function () {
    let list;
    beforeEach(function () {
        list = createList();

    });
    it("List should be empty when initialized.", function () {
        expect(list + '').to.be.equal('');
    });
    it("add function should append the new element as last.", function () {
        list.add(1);
        list.add(2);
        expect(list + '').to.be.equal('1, 2');
    });
    it("shiftLeft function should rotate elements to the left if array length is larger than 1.", function () {
        list.add(1);
        list.add(2);
        list.add(3);
        list.shiftLeft();
        expect(list + '').to.be.equal('2, 3, 1');
    });
    it("shiftLeft function should not change array if it has only one element.", function () {
        list.add(0);
        list.shiftLeft();
        expect(list + '').to.be.equal('0');
    });
    it("shiftLeft function should not change array if it has no elements.", function () {
        list.shiftLeft();
        expect(list + '').to.be.equal('');
    });
    it("shiftRight function should rotate elements to the right if array length is larger than 1.", function () {
        list.add(1);
        list.add(2);
        list.add(3);
        list.shiftRight();
        expect(list + '').to.be.equal('3, 1, 2');
    });
    it("shiftRight function should not change array if it has only one element.", function () {
        list.add(0);
        list.shiftRight();
        expect(list + '').to.be.equal('0');
    });
    it("shiftRight function should not change array if it has no elements.", function () {
        list.shiftRight();
        expect(list + '').to.be.equal('');
    });
    describe("swap functions should return false tests:", function () {
        it("swap should return false if first index is not an integer", function () {
            list.add(1);
            list.add(2);
            expect(list.swap(0.5, 1)).to.be.equal(false);
        });
        it("swap should return false if second index is not an integer", function () {
            list.add(1);
            list.add(2);
            expect(list.swap(1, 1.14)).to.be.equal(false);
        });
        it("swap should return false if first index is less than zero", function () {
            list.add(1);
            list.add(2);
            expect(list.swap(-1, 2)).to.be.equal(false);
        });
        it("swap should return false if second index is less than zero", function () {
            list.add(1);
            list.add(2);
            expect(list.swap(1, -2)).to.be.equal(false);
        });
        it("swap should return false if first index equals the array length", function () {
            list.add(1);
            list.add(2);
            expect(list.swap(2, 0)).to.be.equal(false);
        });
        it("swap should return false if second index equals the array length", function () {
            list.add(1);
            list.add(2);
            expect(list.swap(0, 2)).to.be.equal(false);
        });
        it("swap should return false if first index is larger than the array's length", function () {
            list.add(1);
            list.add(2);
            expect(list.swap(3, 0)).to.be.equal(false);
        });
        it("swap should return false if second index is larger than the array's length", function () {
            list.add(1);
            list.add(2);
            expect(list.swap(0, 3)).to.be.equal(false);
        });
        it("swap should return false if first index equals the second one.", function () {
            list.add(1);
            list.add(2);
            expect(list.swap(0, 0)).to.be.equal(false);
        });
        it("swap should not change array elements if it's false", function () {
            list.add(1);
            list.add(2);
            list.swap(3, 0);
            expect(list + '').to.be.equal('1, 2');
        });
    });
    describe("swap returns true tests", function () {
        it("swap should return true if first and second index are valid.", function () {
            list.add(1);
            list.add(2);
            expect(list.swap(0, 1)).to.be.equal(true);
        });
        it("swap should return true if first index is 0, second one is different than zero and array has at least two element.", function () {
            list.add(1);
            list.add(2);
            expect(list.swap(0, 1)).to.be.equal(true);
        });
        it("swap should return true if second index is 0, first one is different than zero and array has at least two element.", function () {
            list.add(1);
            list.add(2);
            expect(list.swap(1, 0)).to.be.equal(true);
        });
        it("swap should swap elements at index1 and index2 position if swap returns true", function () {
            list.add(1);
            list.add(2);
            list.swap(0, 1);
            expect(list + '').to.be.equal('2, 1');
        });
    });
});