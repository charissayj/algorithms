// Write a function that determines whether a given year is a leap year. 
// If a year is divisible by 4, it is a leap year. 
// Unless it is divisible by 100
// If it is divisible by 400, then it is

function leapYear(year){
    //return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
		{
			console.log(year+" is a leap year");  
		}
	else
	{
		console.log(year+" is not a leap year");  
	}
}

//leapYear(2016);
leapYear(2015);