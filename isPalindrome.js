function isPalindrome(string){
  
  string = string.toLowerCase();
  
  var charactersArr = string.split('');
  var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var lettersArr = [];
  
  //remove each character that is not a letter
  charactersArr.forEach(character => {
    if (validCharacters.indexOf(character) > -1)
      lettersArr.push(character);
  });
  
  if (lettersArr.join('') === lettersArr.reverse().join('')){
    return true;
  }
  else
    return false;
}

console.log(isPalindrome("Madam, I'm Adam"))