/**
 * Dice module.
 * @module Dice/D
 *
 * exposes an anonymous function to simulate dice rolls
 *
 * This will generate random numbers between 1 and the parameter that you give the function
 *
 * If you want to simulate multiple dice, make sure you make multiple calls and then sum
 * die(6) + die(6) + die(6)+die(6) != die(24)
 * in the sum (die(6)) example your minimum value will be 4, die(24) can also return 1,2 and 3
 * @param value integer
 * @return integer
 * @example:
 * var die = require('D');
 * die(6); => will generate a number from 1 till 6
 *
 */
module.exports = function(value){
    return parseInt(Math.random() * value + 1, 10);
};
