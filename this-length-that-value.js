// Given two numbers, return array of length num1 with each value num2
// Print "Jinx" if they are the same

function lengthValue(num1, num2){
    var arr = [];
    if(num1 === num2){
        return "Jinx";
    }
    else{
        for(var i = 0; i <= num1; i++){
            arr.push(num2);
        }
    }
    return arr;
}

lengthValue(4,4);
lengthValue(4,3);