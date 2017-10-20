//Coding Dojo algorithms - set myNum to 42, myName to "Charissa" and swap the variables
function swap(myName, myNum){
    var temp = myName;
    myName = myNum;
    myNum = temp;
    console.log(`myNum is now ${myNum} and myName is now ${myName}`);
}

swap("Charissa", 42);