let expect = require('chai').expect;
let rgbToHexColor = require('../06_RGB-to-hex').rgbToHexColor;

describe("hexademical colors tests", function () {
    it("beyound up limit should return undefined", function () {
        expect(rgbToHexColor(256, 256, 256)).to.be.undefined;
    });
    it("Under bottom limit should return undefined", function () {
        expect(rgbToHexColor(-1, -1, -1)).to.be.undefined;
    });
    it("Bottom limit should return #000000", function () {
        expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000');
    });
    it("Top limit should return #FFFFFF", function () {
        expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF');
    });
    it("zeroes padding => 12, 13, 14 returns #0C0D0E", function () {
        expect(rgbToHexColor(12, 13, 14)).to.be.equal('#0C0D0E');
    });
    it("Invalid type for red", function () {
        expect(rgbToHexColor('red', 13, 14)).to.be.undefined;
    });
    it("Invalid type for green", function () {
        expect(rgbToHexColor(12, 'green', 14)).to.be.undefined;
    });
    it("Invalid type for blue", function () {
        expect(rgbToHexColor(12, 13, 'blue')).to.be.undefined;
    });
});