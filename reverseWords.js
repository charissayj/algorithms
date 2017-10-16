function reverseWords(string){
  var wordsArray = string.split(" ");
  var reversedArray = [];
  
  wordsArray.forEach(word => {
    reversedWord = "";
    for (var i = word.length - 1; i >= 0; i--){
      reversedWord += word[i];
    }
    reversedArray.push(reversedWord);
  });
  
  return reversedArray.join(" ");
}

reverseWords("bananas in pajamas")