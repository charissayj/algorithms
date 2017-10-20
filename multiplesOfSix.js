//Print multiples of 6 up to 60,000 using a while loop

function multiplesOfSix(){
    num = 0;
    while(num < 60000){
        if(num % 6 == 0){
            console.log(num);
        }
        num++;
    }
}

multiplesOfSix();