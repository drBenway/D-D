var roll = require("../../src/Dice/D-dsl"),
    util = require("../util/util");

describe('D-DSL', function(){
    describe('one', function(){
        describe('D4', function(){
            it('should return a value between 1 and four', function(){
                function testDieRoll(){
                    var d4 = roll.one.D.four;
                    expect(d4).toBeGreaterThan(0);
                    expect(d4).toBeLessThan(5);
                }

                util.range(1, 10).map(testDieRoll);
            });
        });
        describe('D6', function(){
            it('should return a value between 1 and six ', function(){
                function testDieRoll(){
                    var d6 = roll.one.D.six;
                    expect(d6).toBeGreaterThan(0);
                    expect(d6).toBeLessThan(7);
                }

                util.range(1, 10).map(testDieRoll);
            });
        });
        describe('D8', function(){
            it('should return a value between 1 and eight ', function(){
                function testDieRoll(){
                    var d8 = roll.one.D.eight;
                    expect(d8).toBeGreaterThan(0);
                    expect(d8).toBeLessThan(9);
                }

                util.range(1, 10).map(testDieRoll);
            });
        });
        describe('D12', function(){
            it('should return a value between 1 and twelve ', function(){
                function testDieRoll(){
                    var d12 = roll.one.D.twelve;
                    expect(d12).toBeGreaterThan(0);
                    expect(d12).toBeLessThan(13);
                }

                util.range(1, 13).map(testDieRoll);
            });
        });
        describe('D20', function(){
            it('should return a value between 1 and twenty ', function(){
                function testDieRoll(){
                    var d20 = roll.one.D.twenty;
                    expect(d20).toBeGreaterThan(0);
                    expect(d20).toBeLessThan(21);
                }

                util.range(1, 20).map(testDieRoll);
            });
        });
        describe('D100', function(){
            it('should return a value between 1 and hundred ', function(){
                function testDieRoll(){
                    var d100 = roll.one.D.hundred;
                    expect(d100).toBeGreaterThan(0);
                    expect(d100).toBeLessThan(101);
                }

                util.range(1, 20).map(testDieRoll);
            });
        });
    });
    describe('two', function(){
        describe('d4', function(){
            it('should return a number between 2 and eight', function(){
                function testDieRoll(){
                    var twod4 = roll.two.D.four;
                    expect(twod4).toBeGreaterThan(1);
                    expect(twod4).toBeLessThan(9);
                }

                util.range(1, 10).map(testDieRoll);
            });
        });
        describe('d6', function(){
            it('should return a number between 2 and 12', function(){
                function testDieRoll(){
                    var twod6 = roll.two.D.six;
                    expect(twod6).toBeGreaterThan(1);
                    expect(twod6).toBeLessThan(13);
                }

                util.range(1, 10).map(testDieRoll);
            });
        });
        describe('d8', function(){
            it('should return a number between 2 and sixteen', function(){

                function testDieRoll(){
                    var twod8 = roll.two.D.eight;
                    expect(twod8).toBeGreaterThan(1);
                    expect(twod8).toBeLessThan(17);
                }

                util.range(1, 10).map(testDieRoll);
            });
        });
        describe('d12', function(){
            it('should return a number between 2 and 24', function(){

                function testDieRoll(){
                    var twod12 = roll.two.D.twelve;
                    expect(twod12).toBeGreaterThan(1);
                    expect(twod12).toBeLessThan(25);
                }

                util.range(1, 10).map(testDieRoll);
            });
        });
        describe('d20', function(){
            it('should return a value between 2 and fourty', function(){

                function testDieRoll(){
                    var twod20 = roll.two.D.twenty;
                    expect(twod20).toBeGreaterThan(1);
                    expect(twod20).toBeLessThan(41);
                }

                util.range(1, 10).map(testDieRoll);

            });
        });
        describe('d100', function(){
            it('should return a value between 2 and two hundred', function(){

                function testDieRoll(){
                    var twod100 = roll.two.D.hundred;
                    expect(twod100).toBeGreaterThan(1);
                    expect(twod100).toBeLessThan(201);
                }

                util.range(1, 10).map(testDieRoll);

            });
        });
    });
    describe('four', function(){
        describe('d6', function(){
            it('should return a value between 4 and 24', function(){

                function testDieRoll(){
                    var fourD6 = roll.four.D.six;
                    expect(fourD6).toBeGreaterThan(3);
                    expect(fourD6).toBeLessThan(25);
                }

                util.range(1, 10).map(testDieRoll);
            });
        });
    });
    describe('should support string to dsl tranformation', function(){
        it('a given string in format numberDnumber should transform into number.D.number', function(){
            var result1 = roll.fromString("1D4"),
                result2 = roll.fromString("2D8");
            expect(result1).toBe("one.D.four");
            expect(result2).toBe("two.D.eight");
            // test wrong string
            expect(function(){
                roll.fromString("oneDfour");
            }).toThrow();
        });
    });

});