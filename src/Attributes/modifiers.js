/**
 * Modifiers module
 * @module Attributes/modifiers
 *

    /*
     * used to get the bonuses for stats
     * @example:
     * var modifiers = require('Attributes/modifiers');
     * var attackrollModifier = modifiers(16);
     */

    let getModifier = function(abilityScore){
        return Math.round((abilityScore - 10) / 2);
    };

module.exports = getModifier;