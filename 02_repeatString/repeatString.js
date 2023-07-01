const repeatString = function(string, repeatTimes) {
    let result = '';
    if(repeatTimes < 0){
        return "ERROR";
    }
    else{
        for(let i = 0 ; i<repeatTimes; i++){
            result += string;
        }
    }
      
    return result;
};

// Do not edit below this line
module.exports = repeatString;
