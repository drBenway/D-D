var die = require("../../src/Dice/D");
var util = require("../Util/util");
describe('dice', function(){
    describe('die', function(){
        it('should return a value within the bounds of the dieroll', function(){
            function testDieRoll(){
                var roll = die(6);
                expect(roll).toBeGreaterThan(0);
                expect(roll).toBeLessThan(7);
            }

            util.range(1, 10).map(testDieRoll);
        });
    });
});