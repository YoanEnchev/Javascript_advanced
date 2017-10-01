let expect = require('chai').expect;
let Console = require('../05_CSharpConsole').Console;

describe("C# console tests", function () {
    describe("Single argument tests", function () {
        it("Returns the argument if it's a string", function () {
            expect(Console.writeLine("Print It")).to.be.equal("Print It");
        });
        it("Returns the JSON stringify format if paremeter is an object", function () {
            expect(Console.writeLine({ a: 1, b: "2" })).to.be.equal(`{"a":1,"b":"2"}`);
        });
    });
    describe("Multiple argument tests", function () {
        it("throw type error if first argument is not a string", function () {
            expect(() => Console.writeLine([], 'a', 'b')).to.throw(TypeError);
        });
        it("throw RangeError error if placeholders in the template are more than the number of required parameters", function () {
            expect(() => Console.writeLine("{0}{1}{2}", 'a', 'b')).to.throw(RangeError);
        });
        it("throw RangeError error if placeholders in the template are less than the number of required parameters", function () {
            expect(() => Console.writeLine("{0}", 'a', 'b')).to.throw(RangeError);
        });
        it("throw RangeError error if placeholders indexes are not within parameters range ({10} for 5 parameters)", function () {
            expect(() => Console.writeLine("Not {10}", "valid")).to.throw(RangeError);
        });
        it("Exchanges parameters and placeholders if every parameter and placeholder index is valid.", function () {
            let string = "{0} to the {1} and it will {2} back to you."
            expect(Console.writeLine(string, 'Smile', 'world', 'smile')).to.be.equal("Smile to the world and it will smile back to you.");
        });
    });
});