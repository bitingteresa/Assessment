var sget = require('sget');
var userTempArray =[];
var userInput;

while (userTempArray.length < 7) {
	enterTemp();
}

function enterTemp() {
		userInput = parseInt(sget('Please enter in temperature:').trim());
		verifyInput(userInput);
		userTempArray.push(userInput);
	}

function average() {
	var sum = userTempArray.reduce(function(temp1, temp2) {
	return temp1 + temp2; });
	return Math.round(sum/userTempArray.length);
}

function verifyInput() {
	if (isNaN(userInput)) {
		console.log("Please enter a valid entry.")
		enterTemp();
	} else {
		return true;
	}
}
console.log(userTempArray);
console.log(average());
