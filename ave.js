var sget = require('sget');
var userTempArray =[];


function run(){
	tempOne();
	tempTwo();
	tempThree();
	tempFour();
	tempFive();
	tempSix();
	tempSeven();
	average();
}

function tempOne () {
	var userTempOne = parseInt(sget('Please enter in first temperature:').trim());
	userTempArray.push(userTempOne);
}

function tempTwo () {
	var userTempTwo = parseInt(sget('Please enter in second temperature:').trim());
	userTempArray.push(userTempTwo);
}

function tempThree () {
	var userTempThree = parseInt(sget('Please enter in third temperature:').trim());
	userTempArray.push(userTempThree);
}

function tempFour () {
	var userTempFour = parseInt(sget('Please enter in fourth temperature:').trim());
	userTempArray.push(userTempFour);
}

function tempFive () {
	var userTempFive = parseInt(sget('Please enter in fifth temperature:').trim());
	userTempArray.push(userTempFive);
}

function tempSix () {
	var userTempSix = parseInt(sget('Please enter in sixth temperature:').trim());
	userTempArray.push(userTempSix);
}

function tempSeven () {
	var userTempSeven = parseInt(sget('Please enter in seventh temperature:').trim());
	userTempArray.push(userTempSeven);
}

var Sum = 0
function average() {
for(var i = 0; i < userTempArray.length; i++) {
	Sum = Sum + userTempArray[i]
	var average = Sum / userTempArray[i]
}
}

run();
console.log(average());