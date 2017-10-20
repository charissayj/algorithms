// Give 4 parameters, param1, param2, param3, param4, print
// multiples of param1. Starting at param2 and extending to param3
// One exception, if a multiple is equal to param4, then skip it. 
// Do this using a while loop 
// Given (3, 5, 17, 9) print 6, 12, 15

function finalCountdown(param1, param2, param3, param4){
    while(param2 != param3){
        if((param2 % param1 == 0) && (param2 != param4)){
            console.log(param2);
        }
        param2++;
    }
}

finalCountdown(3, 5, 17, 9);