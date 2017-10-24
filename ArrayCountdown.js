//Create a function that accepts a number as an input. 
//Return a new array that counts down by one, 
//from the number(as the zeroth element) down to 0.
//Print array length

function countdown(num){
    var arr = [];
    for (var i = num; i >= 0; i--){
        arr.push(i);
    }
    console.log(arr);
    console.log("The arrary is " + arr.length + " elements long");
}

countdown(7);