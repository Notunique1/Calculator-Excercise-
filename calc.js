const readline = require('Calculator'); { console.log (calculator)}



const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	const tokens = input.split(' ');
	
	const mathSymbol = tokens[0];
	const num1 = Number(tokens[1]);
	const num2 = Number(tokens[2]); {console.log }




	// This line closes the connection to the command line interface.
	reader.close()

});

console.log('hello')
