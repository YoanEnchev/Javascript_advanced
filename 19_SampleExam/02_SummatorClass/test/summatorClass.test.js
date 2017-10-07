//Points: 92/100
let expect = require('chai').expect;
let Sumator = require('../summatorClass.js').Sumator;

describe(" list tests", function () {
    let list;
    beforeEach(function () {
        list = new Sumator();

    });
    it("Add function should append element as last.", function () {
        list.add(1);
        list.add(2);
        list.add(3);
        expect(list.data).to.deep.equal([1, 2, 3]);
    });
    it("Add function should append element as last from many any type.", function () {
        list.add(1);
        list.add('two');
        list.add([]);
        expect(list.data).to.deep.equal([1, 'two', []]);
    });
    it("data property should be initialized as empty array.", function () {
        expect(list.data).to.deep.equal([]);
    });
    it("toString function should return (empty) when data has no elements.", function () {
        expect(list + '').to.be.equal('(empty)');
    });
    it("toString function should return elements joined by ', 'when data has elements.", function () {
        list.add(1);
        list.add(2);
        list.add(3);
        expect(list + '').to.be.equal('1, 2, 3');
    });
    it("toString function should return elements joined by ', 'when data has elements no matter the type.", function () {
        list.add(1);
        list.add('two');
        expect(list + '').to.be.equal('1, two');
    });
    it("toString function should return only the first element when data's length is 1.", function () {
        list.add(1);
        expect(list + '').to.be.equal('1');
    });

    it("sumNums function should return 0 if data has no elements", function () {
        expect(list.sumNums()).to.be.equal(0);
    });
    it("sumNums function should return 0 if data has no number type elements", function () {
        list.add('not a number');
        list.add('2');
        list.add({});
        expect(list.sumNums()).to.be.equal(0);
    });
    it("sumNums function should sum all elements if all of them are numbers", function () {
        list.add(1);
        list.add(2);
        list.add(4);
        expect(list.sumNums()).to.be.equal(7);
    });
    it("sumNums function should sum number elements and ignore other types.", function () {
        list.add(1);
        list.add(2);
        list.add('a');
        list.add('3');
        list.add(4);
        list.add(2.5);
        expect(list.sumNums()).to.be.equal(9.5);
    });
    it("removeByFilter function should not remove elements from data if non of them is matched.", function () {
        list.add(1);
        list.add(3);
        list.add(5);
        list.removeByFilter(x => x % 2 === 0);
        expect(list + '').to.be.equal('1, 3, 5');
    });
    it("removeByFilter function should remove all elements from data if all of them match.", function () {
        list.add(1);
        list.add(3);
        list.add(5);
        list.removeByFilter(x => x % 2 !== 0);
        expect(list + '').to.be.equal('(empty)');
    });
    it("removeByFilter function should remove only matched elements if not all of them match", function () {
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);
        list.removeByFilter(x => x % 2 !== 0);
        expect(list + '').to.be.equal('2, 4');
    });
});