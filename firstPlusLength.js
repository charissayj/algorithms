// Given an array, return the sum of the first value in the array, 
// plus the array's length.
// Test for cases where the first value is not an integer

function firstPlusLength(arr){
    if (parseInt(arr[0])){
        sum = arr[0] - arr[arr.length - 1];
    }
    console.log(sum);
}

firstPlusLength([1,2,3,4])
firstPlusLength(["banana", 2, 3, 4])
firstPlusLength([true, 2, 3, 4])