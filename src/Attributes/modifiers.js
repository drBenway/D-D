/**
 * Modifiers module
 * @module Attributes/modifiers
 *

    /*
     * used to get the bonuses for stats
     * @example:
     * var STATS = require('Attributes/stats')(setupobj);
     * var modifiers = require('Attributes/modifiers');
     * var attackrollModifier = modifiers(STATS.getSTR());
     */

    let getModifier = function(abilityScore){
        return Math.round((abilityScore - 10) / 2);
    };

module.exports = getModifier;