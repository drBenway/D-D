
let expect = require('chai').expect;

describe('stats', function(){
    var stats;
    before(function(){
    var setup = {
         STR: 16,
          DEX: 16,
          CON : 15,
          INT: 10,
          WIS: 11,
          CHA: 14
         };
    var STATS = require('../../src/Attributes/stats')(setup);
     console.log(STATS.getSTR);
    });
    it('should return the correct stats', function(){


        const me = stats(character);
        expect (stats.getStr()).to.equal(16);
        me.str = 14;
        expect (me.getStr()).to.equal(16);
    });
});