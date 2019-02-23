//script copyright date

var currentTime = new Date();

var yearoffoundation = 2019;

var currentyear = currentTime.getFullYear();

if(yearoffoundation !== currentyear){

	document.write(yearoffoundation + "-" + currentyear);

}

else {

	document.write(currentyear);

}