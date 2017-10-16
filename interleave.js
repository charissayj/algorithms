function interleave(arr1, arr2){
    var arr3 = [];
    var longest = [];
    
    if (arr1.length > arr2.length){
        longest = arr1;
    }
    
    else{
        longest = arr2;
    }
    
    for (var i = 0; i < longest.length; i++) {
        if (arr1.length >= arr2.length){
            arr3.push(arr1[i])
            if (arr2[i]) {
                if ((arr2[i] > arr1[i]) || (arr2[i] == arr1[i])){
                    arr3.push(arr2[i])
    	       } 
    	       else {
                    arr3.splice(arr3.length-1, 0, arr2[i])
    			}
    		}
    	}	
    	else {
            arr3.push(arr2[i])
            if (arr1[i]){
                if ((arr1[i] > arr2[i]) || (arr1[i] == arr2[i])){
                    arr3.push(arr1[i])
    	        } else 
    	            {
                        arr3.splice(arr3.length-1, 0, arr1[i])
    			    }
    		}
    	}
    }	
    var str = arr3.toString();
    console.log(str);
}

interleave([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]);