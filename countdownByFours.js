//Log positive numbers starting at 2016, counting down by fours, 
//(exclude 0), without a for loop

function countDown(){
    let num = 2016;
    
    while(num != 0){
        console.log(num);
        num -= 4;
    }
}

countDown();