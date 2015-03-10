var sget = require('sget');
var userTempArray =[];
var userInput;

while (userTempArray.length < 7) {
	enterTemp();
}

function enterTemp() {
		userInput = parseInt(sget('Please enter in temperature:').trim());
		userTempArray.push(userInput);
	}

function average() {
	var sum = userTempArray.reduce(function(temp1, temp2) {
	return temp1 + temp2; });
	return sum/userTempArray.length;
}

console.log(userTempArray);
console.log(average());
