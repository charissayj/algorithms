// Your function should accept an array. If value at [0] is greater than array's length print 
// "too big!" If value ar [0] is less than arrat's length, print "Too small!". Otherwise
// print "Just right!"

function fitValue(arr){
    if (arr[0] > arr.length){
        return "Too Big!";
    }
    else if (arr[0] < arr.length){
        return "Too Small!";
    }
    else{
        return "Just Right!";
    }
}

fitValue([1,2,4]);
fitValue([4,2,1]);
fitValue([1]);