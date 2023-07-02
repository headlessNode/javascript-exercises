const sumAll = function(a, b) {

    //check if any parameter is not a number
    if(typeof a !== 'number' || typeof b !== 'number'){
        return "ERROR";
    }
    else{
        
        //check for if any parameter is -ve
        if(Math.sign(a) == -1 || Math.sign(b) == -1){
            return "ERROR";
        }
        
        //check for which parameter is greater
        if(a > b){
            //code
            let result = 0;
            for(let i = 1; i<=a;i++){
                result += i;
            }

            return result;
        
        }
        
        else{
            //code
            let result = 0;
            for(let i = 1; i<=b;i++){
                result += i;
            }

            return result;        
        }
    }

};

// Do not edit below this line
module.exports = sumAll;
