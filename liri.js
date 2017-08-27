

var inquirer = require('inquirer');

inquirer.prompt([
	{
		name: "whatToDo",
		message: "What do you want to do?",
		type: 'list',
		choices: ["my-tweets", "spotify-this-song", "movie-this", "do-what-it-says"]
	},
	
	]);

// if (answer === "my-tweets") {

// 	}