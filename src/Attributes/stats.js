/**
 * Stats module
 * @module Attributes/stats
 *
 * this is a container for the characters stats. It functions as a Constant.
 * When created all the stats are set and can only be accessed via getters.
 *
 * @example
 * var setup = {
 *      STR: 16,
 *      DEX: 16,
 *      CON : 15,
 *      INT: 10,
 *      WIS: 11,
 *      CHA: 14
 * };
 * var STATS = require('Attributes/stats')(setup);
 * console.Log(STATS.getSTR);
 * => 16
 *
 * @param setup
 * @constructor
 */
// initializes the CONSTANT STATS when first called
var STATS = function(setup){
    STATS = function(){
        return {
            getStr: setup.STR,
            getDEX: setup.DEX,
            getCON: setup.CON,
            getINT: setup.INT,
            getWIS: setup.WIS,
            getCHA: setup.CHA
        };
    };
};
module.exports = STATS;