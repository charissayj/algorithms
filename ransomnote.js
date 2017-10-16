function HarmlessRansomNote(note, magazine){
  var noteArray = note.split(' ');
  var magazineArray = magazine.split(' ');
  //using '' with no space pushes the letters into an array 
  //using ' ' with a space pushes entire words into an array
  
  var magazineObject = {};
  
  //the => notation is the same as forEach(function(word){})
  //it's called an arrow function and is a "cleaner" way to write the function
  
  //this loop runs at o(m) complexity because it loops through every element of the magazine array which is likely not the same length as the note array
  magazineArray.forEach(word => {
    if (!magazineObject[word]) magazineObject[word] = 0;
    magazineObject[word]++;
  });
  
  var noteIsPossible = true;
  
  //this loop runs at o(n) time complexity because it loops through every word in the note array
  noteArray.forEach(word => {
    if (magazineObject[word]){
      magazineObject[word]--;
      if (magazineObject[word] < 0 ){
        noteIsPossible = false;
      }
    }
    else 
      noteIsPossible = false;
  });
  
  return noteIsPossible;
}

//HarmlessRansomNote("This is a secret not for you from a secret bro", "This is a secret not for you from a secret bro")
HarmlessRansomNote("A note that will not work", "nope")

//the time complexity of this algorithm is o(n) + o(m) which is o(n + m) and it has a linear time complexity