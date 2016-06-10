var D = require('./D');
/*
* DSL like syntax for rolling dice
* @returns {}
* @example:
* var roll = require('D-dsl');
* var attackroll = roll.one.D.twenty;
* => attackroll will contain a value between 1 and 20
 */
module.exports = (function(){
    return {
        one: {
            D: {
                four: D(4),
                six: D(6),
                eight: D(8),
                twelve: D(12),
                twenty: D(20),
                hundred: D(100)
            }
        },
        two: {
            D: {
                four: D(4) + D(4),
                six: D(6) + D(6),
                eight: D(8) + D(8),
                twelve: D(12) + D(12),
                twenty: D(20) + D(20),
                hundred: D(100) + D(100)
            }
        },
        four: {
            D: {
                six: D(6) + D(6) + D(6) + D(6)
            }
        },
        fromString: function(str){
            var numbers =
                {
                    1: "one",
                    2: "two",
                    3: "three",
                    4: "four",
                    6: "six",
                    8: "eight",
                    10: "ten",
                    20: "twenty",
                    100: "hundred"
                }
                ;
            var arr = str.split("D"),
                part1 = arr[0],
                part2 = arr[1];

            if (arr.length == 2 && isFinite(part1) && isFinite(part2)) {
                return numbers[arr[0]] + ".D." + numbers[arr[1]];
            }
            else {
                throw new Error("fromString recieved an invalid string. expl: fromString('1D6').");
            }
        }
    };
})();
