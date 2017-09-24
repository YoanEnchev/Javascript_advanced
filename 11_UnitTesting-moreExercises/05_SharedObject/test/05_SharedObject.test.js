let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

let sharedObject = require('../05_SharedObject.js').sharedObject;

document.body.innerHTML = `<div id="wrapper">
    <input type="text" id="name">
    <input type="text" id="income">
</div>`;

describe("Shared Object Tests:", function () {
    describe("Initial value tests:", function () {
        it("Name initial value should be null", function () {
            expect(sharedObject.name).to.be.null;
        });
        it("Income initial value should be null", function () {
            expect(sharedObject.income).to.be.null;
        });
    });
    describe("Change name tests:", function () {
        it("Empty string should not change name (remains null)", function () {
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.null;
        });
        it("Should change name if it's not empty string", function () {
            sharedObject.changeName('Alice');
            expect(sharedObject.name).to.be.equal('Alice', 'Name was not changed');
        });
        it("Should change name textfield value if it's not empty string", function () {
            let nameTextfield = $('#name');
            sharedObject.changeName('Alex');
            expect(nameTextfield.val()).to.be.equal('Alex', 'Name was not changed');
        });
        it("Should not change name textfield value if it's an empty string", function () {
            let nameTextfield = $('#name');
            sharedObject.changeName('Austin');
            sharedObject.changeName('');
            expect(nameTextfield.val()).to.be.equal('Austin');
        });
    });
    describe("Update name tests:", function () {
        it("Should not change name when name textfield is changed with an empty string", function () {
            sharedObject.changeName('Alice');
            let nameTxtField = $('#name');
            nameTxtField.val("");
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('Alice');
        });
        it("Should change name when name textfield is changed with a non empty string", function () {
            sharedObject.changeName('Alice');
            let nameTxtField = $('#name');
            nameTxtField.val("Amy");
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('Amy');
        });
    });
    describe("Change Income tests:", function () {
        it("Should not change income if parameter is NaN", function () {
            sharedObject.changeIncome('abc');
            expect(sharedObject.income).to.be.null;
        });
        it("Should not change income if it's floating point number ", function () {
            sharedObject.changeIncome(3.5);
            expect(sharedObject.income).to.be.null;
        });
        it("Should not change income if number is less than zero", function () {
            sharedObject.changeIncome(-1);
            expect(sharedObject.income).to.be.null;
        });
        it("Should not change income if number is zero", function () {
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.be.null;
        });
        it("Should change income if number is valid", function () {
            sharedObject.changeIncome(5);
            expect(sharedObject.income).to.be.equal(5);
        });
        it("Should change income textField if number is valid", function () {
            sharedObject.changeIncome(15);
            let incomeTxt = $('#income');
            expect(incomeTxt.val()).to.be.equal('15');
        });
        it("Should not change income textField if parameter is invalid", function () {
            sharedObject.changeIncome(10);
            sharedObject.changeIncome([]);
            let incomeTxt = $('#income');
            expect(incomeTxt.val()).to.be.equal('10');
        });
    });
    describe("Update Income tests:", function () {
        it("Should not change income when name textfield is changed with NaN", function () {
            sharedObject.changeIncome(100);
            let incomeTxt = $('#income');
            incomeTxt.val("abc");
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(100);
        });
        it("Should not change income when name textfield is changed with floating point number", function () {
            sharedObject.changeIncome(100);
            let incomeTxt = $('#income');
            incomeTxt.val("2.5");
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(100);
        });
        it("Should not change income when name textfield is changed with negatice number", function () {
            sharedObject.changeIncome(100);
            let incomeTxt = $('#income');
            incomeTxt.val("-1");
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(100);
        });
        it("Should not change income when name textfield is changed with zero", function () {
            sharedObject.changeIncome(100);
            let incomeTxt = $('#income');
            incomeTxt.val("0");
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(100);
        });
        it("Should change income when name textfield is changed with valid number", function () {
            sharedObject.changeIncome(100);
            let incomeTxt = $('#income');
            incomeTxt.val("1");
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(1);
        });
    });
});