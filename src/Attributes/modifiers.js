/**
 * Modifiers module
 * @module Attributes/modifiers
 *
module.exports = function() {
    /*
     * used to get the bonuses for stats
     * @example:
     * var STATS = require('Attributes/stats')(setupobj);
     * var modifiers = require('Attributes/modifiers');
     * var attackrollModifier = modifiers(STATS.getSTR());
     */

    this.getModifier = function(abilityScore){
        return Math.round((abilityscore - 10) / 2);
    }



};