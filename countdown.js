// create a countdown that accepts a number as an input. return a new array that counts down by 1 
// from the number (as the array's zeroth element) down to zero. How long is the array?

function countdown(num){
    var arr = [];
    for(var i = num; i > 0; i--){
        arr.push(i);
    }
    console.log("The array is " + arr.length + " elements long");
    return arr;
}

countdown(5);