let roll = require("../../src/Dice/D"),
    dice = require("../../src/Dice/D");
let expect = require('chai').expect;
describe('dice', function () {
    describe('one', function () {
        describe('D4', function () {
            it('should return a value between 1 and four', function () {
                var d4 = roll.one.D.four;
                expect(d4).to.be.above(0);
                expect(d4).to.be.below(4);
            });
        });
        describe('D6', function () {
            it('should return a value between 1 and six ', function () {
                var d6 = roll.one.D.six;
                expect(d6).to.be.above(0);
                expect(d6).to.be.below(6);
            });
        });
        describe('D8', function () {
            it('should return a value between 1 and eight ', function () {
                var d8 = roll.one.D.eight;
                expect(d8).to.be.above(0);
                expect(d8).to.be.below(8);
            });
        });
        describe('D12', function () {
            it('should return a value between 1 and twelve ', function () {
                var d12 = roll.one.D.twelve;
                expect(d12).to.be.above(0);
                expect(d12).to.be.below(12);
            });
        });
        describe('D20', function () {
            it('should return a value between 1 and twenty ', function () {
                var d20 = roll.one.D.twenty;
                expect(d20).to.be.above(0);
                expect(d20).to.be.below(20);
            });
        });
        describe('D100', function () {
            it('should return a value between 1 and hundred ', function () {
                var d100 = roll.one.D.hundred;
                expect(d100).to.be.above(0);
                expect(d100).to.be.below(101);
            });
        });
    });
    describe('two', function () {
        describe('d4', function () {
            it('should return a number between 2 and eight', function () {
                var twod4 = roll.two.D.four;
                expect(twod4).to.be.above(1);
                expect(twod4).to.be.below(9);
            });
        });
        describe('d6', function () {
            it('should return a number between 2 and 12', function () {
                var twod6 = roll.two.D.six;
                expect(twod6).to.be.above(1);
                expect(twod6).to.be.below(13);
            });
        });
        describe('d8', function () {
            it('should return a number between 2 and sixteen', function () {
                var twod8 = roll.two.D.eight;
                expect(twod8).to.be.above(1);
                expect(twod8).to.be.below(17);
            });
        });
        describe('d12', function () {
            it('should return a number between 2 and 24', function () {
                var twod12 = roll.two.D.twelve;
                expect(twod12).to.be.above(1);
                expect(twod12).to.be.below(25);
            });
        });
        describe('d20', function () {
            it('should return a value between 2 and fourty', function () {
                var twod20 = roll.two.D.twenty;
                expect(twod20).to.be.above(1);
                expect(twod20).to.be.below(41);

            });
        });
        describe('d100', function () {
            it('should return a value between 2 and two hundred', function () {
                var twod100 = roll.two.D.hundred;
                expect(twod100).to.be.above(1);
                expect(twod100).to.be.below(201);

            });
        });
    });
    describe('four', function () {
        describe('d6', function () {
            it('should return a value between 4 and 24', function () {
                var fourD6 = roll.four.D.six;
                expect(fourD6).to.be.above(3);
                expect(fourD6).to.be.below(25);
            });
        });
    });
    describe('should support string to dsl tranformation', function(){
        it('a given string in format numberDnumber should transform into number.D.number', function () {
            var result1 = dice.fromString("1D4"),
                result2 = dice.fromString("2D8");
            expect (result1).to.equal("one.D.four");
            expect (result2).to.equal("two.D.eight");
            // test wrong string
            expect(function(){dice.fromString("oneDfour");}).to.throw();
        });
    });

});