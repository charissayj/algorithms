// Build a function that takes an array of numbers. The function should print the second-to-last value
// in the array and return the first odd value in the array.

function printOneReturnOne(arr){
    var odd = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            odd = arr[i];
            break;
        }
    }
    console.log(arr[arr.length-2]);
    return odd;
}

printOneReturnOne([2,4,5,8,9]);