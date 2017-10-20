//Print integers 1 to 100. 
//If divisible by 5, print "coding" instead. 
//If by 10, also print dojo

function dojoCounting(){
    for(var i = 0; i <= 100; i++){
        if(i % 5 == 0){
            console.log("Coding");
        
            if((i % 5 == 0) && (i % 10 == 0)){
                console.log("Dojo");
            }
        }
        else{
            console.log(i);
        }
    }
}

dojoCounting();