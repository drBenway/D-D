modifier = require("../../src/Attributes/modifiers");

describe('modifiers', function(){
    it('should return the correct modifier for a given number', function(){
        var str = 16;
        expect (modifier(str)).toEqual(3);
    });
});