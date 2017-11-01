// Given an array of numbers, create a function to replace the last value of the array
// with the number of positive numbers in the array

function countPositives(arr){
    var length = arr.length;
    var count = 0;
    for(var i = 0; i < length; i++){
        if(arr[i] > 0){
            count++;
        }
    }
    arr.pop(arr.length - 1);
    arr.push(count);
    
    
    return arr;
}

countPositives([-1,1,1,1]);