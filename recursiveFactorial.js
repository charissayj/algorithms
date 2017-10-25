function factorial(num) {
  if (num === 1) {
    return num
  }
  
  else {
    return num * factorial(num -1);
  }
}

factorial(4);

//Call Stack
//factorial(4)    num = 4 
//since 4 does not equal one go to the else statement
//get return 4 * factorial(3)
//return 3 * factorial(2)
//return 2 * factorial(1)
// since factorial(1) num === 1 
//return 1 
//call stack begins to unwind
//return 1 
//return 2 * 1 
// return 3 * 2 
// return 4 * 6 
//return 24 