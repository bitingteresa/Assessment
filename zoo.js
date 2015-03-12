var sget = require('sget');
var menuInput;
var nameInput;
var score = 0;

function nameSloth() {
	nameInput = sget("Congratulations, you've just adopted a sloth in to your family! What would you like to name the lil fellow?" ).trim();
	return nameInput;
	console.log("Awesomesauce, your sloth is named " + nameInput);
}

function menu() {
	menuInput = parseInt(sget("\n" + 'Now that ' + nameInput + " is part of your family, what would you like to do with them? (Please enter a number) \n1 - Climb a tree and hang out \n2 - Share a meal of apple slices \n3 - Take a nap together \n4 - Ride a motorcycle with your homie \n5 - Quit the game because it's too much responsibility.").trim());
	switch (menuInput) {
		case 1:
			climbTree();
			score += randomNum();
			menu();
		case 2:
			shareApple();
			score += randomNum();
			menu();
		case 3:
			takeNap();
			score += randomNum();
			menu();
		case 4:
			rideMotor();
			score -= randomNum();
			menu();
		case 5:
			quit();
			break;
		default:
			console.log('Please enter in a valid entry.');
			menu();
			break;	
	}
}

function climbTree() {
	console.log('\n' + nameInput + ' is happy to be hanging with you!');
}

function shareApple() {
	console.log('\n' + nameInput + ' is full and hopes you are too!');
}

function takeNap() {
	console.log('\n' + nameInput + ' is rested. Did you have a night terror?');
}

function rideMotor() {
	console.log('\n' + nameInput + ' rode the sidecar like a champ, but that was pretty reckless.');
}

function quit() {
	console.log("This is your score " + score);
	menuInput = sget('Are you sure you want to quit? y/n').trim()
	if (menuInput === 'y') {
		process.exit(0);
	} else if (menuInput === 'n') {
		menu();
	} else {
		console.log('Please enter valid answer:');
		quit();
	}
}

function randomNum() {
	return Math.floor(Math.random() * 10 + 1);
}


nameSloth();
menu();