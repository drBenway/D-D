let modifier = require("../../src/Attributes/modifiers");
let expect = require('chai').expect;

describe('modifiers', function(){
    it('should return the correct modifier for a given number', function(){
        const str = 16;
        const dex = 14;
        const con = 12;
        const int = 10;
        const wis = 8;
        const cha = 6;
        expect (modifier(str)).to.equal(3);
        expect (modifier(dex)).to.equal(2);
        expect (modifier(con)).to.equal(1);
        expect (modifier(int)).to.equal(0);
        expect (modifier(wis)).to.equal(-1);
        expect (modifier(cha)).to.equal(-2);

    });
});