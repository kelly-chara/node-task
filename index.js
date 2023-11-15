const repl = require('repl');


function getRandomNumber() {
 return Math.random()   
}


// Run in REPL mode
repl.start('> ').context.getRandomNumber = getRandomNumber;