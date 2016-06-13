module.exports = function() {
    /*
     used to get the bonuses for stats
     exple: str 18 => +4
     */

    this.getModifier = function(abilityScore){
        return Math.round((abilityscore - 10) / 2);
    }



};