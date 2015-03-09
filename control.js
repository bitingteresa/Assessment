var sget = require('sget');
var password = [];

function createPassword () {
	password = sget('Create your password with at least 10 characters and one uppercase letter or exclamation point:');
	check();
}

function check() {
	verifyPasswordLength();
	specialCharacters();
	capitalLetter();
}

function verifyPasswordLength() {
	if (passwordLength() === true) {
		console.log("You have at least 10 characters.");
	} else {
		console.log("Please enter in at least 10 characters.");
	}
}

function passwordLength() {
	if (password.length > 10) {
		return true;
	} 
}

function specialCharacters() {
	for (var i = 0; i < password.length; i++) {
	if (password[i].indexOf('!') != -1) {
		return true;
	}}
}

function capitalLetter() {
	for (var i = 0; i < password.length; i++) {
	if (password[i].indexOf() == password.toUpperCase) {
		console.log('You have a capital');
	}}
}


createPassword();