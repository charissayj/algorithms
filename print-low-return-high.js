// Create a function that takes an array of numbers. The function should print the lowest number
// In the array, and return the highest value in the array 

function printLowReturnHigh(arr){
    var low = arr[1];
    var big = arr[1];
    var length = arr.length;
    
    for(var i = 0; i < length; i++){
        if(arr[i] < low){
            low = arr[i];
        }
        else if(arr[i] > big){
            big = arr[i];
        }
    }
    console.log(low);
    return big;
}

printLowReturnHigh([1,2,3,4,5]);