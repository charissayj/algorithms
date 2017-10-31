// For [1,3,5,7,9,13], print values that are greater than it's second value.
// Return how many values this is

function greaterThanSecond(){
	var arr = [1,3,5,7,9,13];
	var length = arr.length;
	var count = 0;

	for(var i = 0; i < length; i++){
		if(arr[i] > arr[2]){
		    console.log(arr[i]);
		    count++;
		}
	}
	return count;
}

greaterThanSecond()