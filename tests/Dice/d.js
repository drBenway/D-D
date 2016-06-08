var Die = require("../../src/Dice/D");
describe('test', function () {
    it('should work', function () {
        var d20 = Die.D(20);
        expect(d20).toBeGreaterThan(0);
        expect(d20).toBeLessThan(21);
    });
});