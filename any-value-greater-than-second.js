// Write a function that accepts any array, and returns a new array with the array values that
// are greater than it's second value. Print how many values this is. 
// What will you do if the array is only one element long?

function greaterThanSecond(arr){
	var length = arr.length;
	var count = 0;

	for(var i = 0; i < length; i++){
		if(arr.length > 1){
    		if(arr[i] > arr[2]){
    		    console.log(arr[i]);
    		    count++;
    		}
		}
		else{
		    return "There is only one element in the array";
		}
	}
	return count;
}

greaterThanSecond(["one", "two", "three", false, true])
greaterThanSecond([1]);