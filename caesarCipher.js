function caesarCipher(string, num){
  num = num % 26;
  var lowerString = string.toLowerCase();
  var alphaArr = "abcdefghijklmnopqrstuvwxyz".split('');
  var newString = "";
  
  //loop through string and shift it the correct amount
  for (var i = 0; i < lowerString.length; i++){
    var currentLetter = lowerString[i];
    if (currentLetter[i] === " "){
      newString += currentLetter;
      continue;
    }
    //this locates where the letter is in the array
    var currentIndex = alphaArr.indexOf(currentLetter);
    var newIndex = currentIndex + num;
    //loop letter to beginning of alphabet if it reaches z
    if (newIndex > 25){
      newIndex = newIndex - 26;
    }
    if (newIndex < 0){
      newIndex = 26 + newIndex;
    }
    if (string[i] === string[i].toUpperCase()){
      newString += alphaArr[newIndex].toUpperCase();
    }
    else
      newString += alphaArr[newIndex];
  }
  
  return newString;
}

caesarCipher("Zoo Keeper", 2)