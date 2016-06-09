module.exports = (function () {
    var die = function (value) {
        return (Math.random() * (value - 1) + 1);
    };
    return {
        "one": {
            "D": {
                "four": die(4),
                "six": die(6),
                "eight": die(8),
                "twelve": die(12),
                "twenty": die(20),
                "hundred": die(100)
            }
        },
        "two": {
            "D": {
                "four": die(4) + die(4),
                "six": die(6) + die(6),
                "eight": die(8) + die(8),
                "twelve": die(12) + die(12),
                "twenty": die(20) + die(20),
                "hundred": die(100) + die(100)
            }
        },
        "four": {
            "D": {
                "six": die(6) + die(6) + die(6) + die(6)
            }
        },
        "fromString": function (str) {
            var numbers =
                {
                    "1" :"one",
                    "2" :"two" ,
                    "3" :"three",
                    "4" : "four" ,
                    "6" : "six",
                    "8" : "eight" ,
                    "10" : "ten" ,
                    "20" : "twenty" ,
                    "100" : "hundred"
                }
                ;
            var arr = str.split('D'),
             part1 = arr[0],
            part2 = arr[1];

            if (arr.length == 2 && isFinite(part1) && isFinite(part2)){
                console.log(numbers[arr[0]]);
                console.log(numbers[arr[1]]);
                return numbers[arr[0]] + ".D." + numbers[arr[1]];
            }
            else{
                throw "fromString recieved an invalid string. expl: fromString('1D6').";
            }
        }
    }
})();