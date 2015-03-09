var sget = require('sget');

var userInput;

var numberWrangler = [];

//mega function to run the whole damn thing

function runTheNumbers() {
	firstNumber();
	secondNumber();
	thirdNumber();
	orderNumber();
}

function firstNumber () {
	userInput = parseInt(sget("Please enter in first number:").trim());
	numberWrangler.push(userInput);
	return userInput;
}

function secondNumber () {
	userInput = parseInt(sget("Please enter in second number:").trim());
	numberWrangler.push(userInput);
	return userInput;
}

function thirdNumber () {
	userInput = parseInt(sget("Please enter in third number:").trim());
	numberWrangler.push(userInput);
	return userInput;
}


function orderNumber () {
	numberWrangler.sort(function (a,b) {
	return a - b;
})}
	
	// how to order them - so use .sort but it has to be in an array

runTheNumbers();
console.log(numberWrangler.reverse());