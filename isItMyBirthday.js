// If 2 given numbers represent your birth month and day 
//in either order, log "How did you know?", else log "Just another day"

function isItMyBirthday(num1, num2){
    let day = 9;
    let month = 12;
    
    if(num1 == day || num2 == day){
        if(num1 == month || num2 == month){
            console.log("How did you know?");
        }
    }
    else{
        console.log("Just antoher day...");
    }
}

isItMyBirthday(9, 12);
isItMyBirthday(3, 5)