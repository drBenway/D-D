module.exports = (function(){
    var die = function(value){
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
        "four":{
            "D":{
                "six": die(6) + die(6) + die(6) + die(6)
            }
        }
    }
})();