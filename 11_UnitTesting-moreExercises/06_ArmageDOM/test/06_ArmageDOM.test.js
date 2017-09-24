let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

let nuke = require('../06_ArmageDOM.js').nuke;

before(() => global.$ = $); //fixes jquery

describe("ArmageDOM tests:", function () {
    beforeEach(function () {
        document.body.innerHTML = `<div id="target">
    <div class="nested target">
        <p>This is some text</p>
    </div>
    <div class="target">
        <p>Empty div</p>
    </div>
    <div class="inside">
        <span class="nested">Some more text</span>
        <span class="target">Some more text</span>
    </div>
</div>`;
    });

    it("Should not change if second selector is invalid", function () {
        let selector_1 = $('.inside');
        let selector_2 = 2; //invalid

        let oldhtml = selector_1.html();

        nuke(selector_1, selector_2);
        expect(selector_1.html()).to.be.equal(oldhtml); 
    });
    it("Does not proceed if selector are the same", function () {
        let selector_1 = $('div.nested');
        let selector_2 = selector_1;

        let oldhtml = $('body').html();
        nuke(selector_1, selector_2);
        let newHtml = $('body').html();

        expect(oldhtml).to.be.equal(newHtml);
    });
    it("Delete node with two valid and diffrent selectors", function () {
        let selector_1 = $('.nested');
        let selector_2 = $('.target');

        let beforeNuke = $('body').html();
        nuke(selector_1, selector_2);
        let afterNuke = $('body').html();

        expect(beforeNuke).to.not.equal(afterNuke);
    });
    it("Does not delete node with two valid and diffrent selectors", function () {
        let selector_1 = $('span.target');
        let selector_2 = $('span.nested');

        let beforeNuke = $('body').html();
        nuke(selector_1, selector_2);
        let afterNuke = $('body').html();

        expect(beforeNuke).to.be.equal(afterNuke);
    });
    it("Does not delete node if first selector is non-existant ", function () {
        let selector_1 = $('section');
        let selector_2 = $('.nested');

        let beforeNuke = $('body').html();
        nuke(selector_1, selector_2);
        let afterNuke = $('body').html();

        expect(beforeNuke).to.be.equal(afterNuke);
    });
    it("Does not delete node if second selector is non-existant ", function () {
        let selector_1 = $('.nested');
        let selector_2 = $('article');

        let beforeNuke = $('body').html();
        nuke(selector_1, selector_2);
        let afterNuke = $('body').html();

        expect(beforeNuke).to.be.equal(afterNuke);
    });
});