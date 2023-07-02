const removeFromArray = function(array, ...args) {
    return array.filter(function(x){
        return !args.includes(x);
    });
};



// Do not edit below this line
module.exports = removeFromArray;
