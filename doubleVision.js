// Given an array, create a function to return a new array where each value in the original
// has been doubled. Calling double ([1,2,3]) should return [2,4,6] without changing the original

function doubleVision(arr){
    var newArr = [];
    var length = arr.length;
    
    for(var i = 0; i < length; i++){
        newArr.push(arr[i] * 2);
    }
    
    return newArr;
}

doubleVision([1,2,3]);