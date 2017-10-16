function meanMedianMode(arr){
  return {
    mean: getMean(arr),
    median: getMedian(arr),
    mode: getMode(arr)
  };
}

function getMean(arr){
  var sum = 0;
  var length = arr.length;

  for (var i = 0; i < length; i++){
    sum += arr[i];
  }
  
  var mean = sum / length;
  
  return mean;
}

function getMedian(arr){
  var length = arr.length;
  
  arr.sort(function(a, b){
    return a - b;
  });
  
  var median;
  
  //odd number of arr elements
  if (length % 2 !== 0){
    median = arr[Math.floor(length / 2)];
  }
  
  //even number of arr elements
  else {
    var middle1 = arr[(length / 2 -1)];
    var middle2 = arr[(length / 2)];
    median = (middle1 + middle2) / 2;
  }
  
  return median;
}

function getMode(arr){
  //hash table
  var modeObj = {};
  
  arr.forEach(num => {
    if (!modeObj[num]) modeObj[num] = 0;
      modeObj[num]++;
  });
  
  var maxFrequency = 0;
  var modeArr = [];
  
  for (var num in modeObj) {
    if (modeObj[num] > maxFrequency) {
      modeArr = [num];
      maxFrequency = modeObj[num];
    }
    
    else if (modeObj[num] === maxFrequency) {
      modeArr.push(num);
    }
    
    if (modeArr.length === Object.keys(modeObj).length){
      modeArr = [];
    }
    
  }
  
  return modeArr;
}

meanMedianMode([1,2,3,4,5,4,6,1])
//meanMedianMode([9, 10, 23, 10, 23, 9])