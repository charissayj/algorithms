function FizzBuzz(num){
  for (var i = 1; i < num; i++){
    if (i % 15 === 0){
      console.log("Fizz Buzz")
    }
    else if (i % 5 === 0){
      console.log("Buzz")
    }
    else if (i % 3 === 0){
      console.log("Fizz")
    }
    console.log(i);
  }
}

FizzBuzz(50)