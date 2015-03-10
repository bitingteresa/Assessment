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

console.log(userTempArray);
