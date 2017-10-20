//Print all integer multiples of 5, from 512 to 4096. 
//Afterward, log how many multiples there were

function printCount(){
    var count = 0;
    for(var i = 512; i <= 4096; i++){
        if(i % 5 == 0){
            console.log(i);
            count++;
        }
    }
    console.log(`There are ${count} multiples of 5`);
}

printCount();