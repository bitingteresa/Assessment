var sget = require('sget');
var password;

function createPassword () {
	password = sget('Create your password with at least 10 characters and one uppercase letter or exclamation point:');
	check();
}

function check() {
	if (checkPasswordLength() && (specialCharacters() || capitalLetter())) {
	console.log("Confirmed password!");
	} else {
		console.log("Try again, there was an error creating your password.");
	}
}


function checkPasswordLength() {
	if (password.length > 10) {
		return true;
	} else {
		return false;
	} 
}

function specialCharacters() { {
		if (password.indexOf('!') >= 0) {
			console.log('hello!!!!');
			return true;
		} else {
			return false;
		}
	}
}

function capitalLetter() {
	if (password !== password.toLowerCase()) {
		console.log('hello');
		return true;
	} else {
		return false;
	}
}


createPassword();