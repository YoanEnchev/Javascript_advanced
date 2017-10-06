let expect = require('chai').expect;
let SortedList = require('../SortedList.js').SortedList;

describe("Sorted list tests", function () {
    let instance;
    beforeEach(function () {
        instance = new SortedList();
    });
    it("Add function should exits.", function () {
        expect(SortedList.prototype.hasOwnProperty('add')).to.be.equal(true);
    });
    it("Remove function should exits.", function () {
        expect(SortedList.prototype.hasOwnProperty('remove')).to.be.equal(true);
    });
    it("Get function should exits.", function () {
        expect(SortedList.prototype.hasOwnProperty('get')).to.be.equal(true);
    });
    it("Size property should exits.", function () {
        expect(SortedList.prototype.hasOwnProperty('size')).to.be.equal(true);
    });

    it("Has empty array as initial value to property list", function () {
        expect(instance.list).to.have.all.members([]);
    });
    it("Should add elements", function () {
        instance.add(1);
        instance.add(2);
        instance.add(3);
        expect(instance.list).to.have.all.members([1, 2, 3]);
    });
    it("Should add elements and sort them after element is added", function () {
        instance.add(1);
        instance.add(0);
        instance.add(2);
        expect(instance.list).to.have.all.members([0, 1, 2]);
        instance.add(-1);
        expect(instance.list).to.have.all.members([-1, 0, 1, 2]);
    });
    it("Should remove elements when index is valid", function () {
        instance.add(10);
        instance.add(20);
        instance.add(30);
        instance.remove(2);
        expect(instance.list).to.have.all.members([10, 20]);
    });
    it("Should operate right in mix of add and remove calls", function () {
        instance.add(1);
        instance.remove(0);
        instance.add(0);
        instance.add(1);
        instance.add(2);
        instance.add(1);
        expect(instance.list).to.have.all.members([0, 1, 1, 2]);
    });
    it("Should get element if index is valid.", function () {
        instance.add(0);
        instance.add(1);
        instance.add(2);
        expect(instance.get(2)).to.be.equal(2);
    });
    it("Should throw error if get index equals the number of elements(length).", function () {
        instance.add(0);
        instance.add(1);
        expect(() => instance.get(2)).to.throw(Error);
    });
    it("Should throw error if get index is larger than the number of elements(length).", function () {
        instance.add(0);
        instance.add(1);
        expect(() => instance.get(3)).to.throw(Error);
    });
    it("Should throw error if get index is a negative number.", function () {
        instance.add(0);
        instance.add(1);
        expect(() => instance.get(-1)).to.throw(Error);
    });
    it("Should throw error if remove index is larger than the number of elements(length).", function () {
        instance.add(0);
        instance.add(1);
        expect(() => instance.remove(3)).to.throw(Error);
    });
    it("Should throw error if remove index is a negative number.", function () {
        instance.add(0);
        instance.add(1);
        expect(() => instance.get(-1)).to.throw(Error);
    });
    it("Should throw error if remove index equals the number of elements(length).", function () {
        instance.add(0);
        instance.add(1);
        expect(() => instance.get(2)).to.throw(Error);
    });
    it("Should throw error if get is called when list length is 0.", function () {
        expect(() => instance.get(0)).to.throw(Error);
    });
    it("Should throw error if remove is called when list length is 0.", function () {
        expect(() => instance.remove(0)).to.throw(Error);
    });
    it("Should sort elements.", function () {
        instance.add(1);
        instance.add(0);
        instance.add(2);
        instance.sort();
        expect(instance.list).to.have.all.members([0, 1, 2]);
    });
    it("Should get the length of the list with property size.", function () {
        instance.add(0);
        instance.add(1);
        instance.add(2);
        expect(instance.size).to.be.equal(3);
    });
    it("Should return 0 for list size if it has no elements", function () {
        expect(instance.size).to.be.equal(0);
    });
});