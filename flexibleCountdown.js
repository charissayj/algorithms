//Based on earlier countdown by fours, given a lowNum, highNum, and mult, 
//print multiples of mult from highNum to lowNum, using a four loop.
//For (2, 9, 3) print 9, 6, 3 on successive lines.

function flexibleCount(lowNum, highNum, mult){
    for(highNum; highNum >= lowNum; highNum--){
        if(highNum % mult == 0){
            console.log(highNum);
        }
    }
}

flexibleCount(2, 9, 3) 