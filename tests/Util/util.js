module.exports = {
    range: function(from,to){
        var arr = [], i = from;
        for (i; i <= to; i++) {
            arr.push(i);
        }
        return arr;
    }
};