 
// 1. create a function getComputerChoice to randomly generate rock, paper or scissors and stores to a variable.

let choice = ["scissors", "paper", "rock"];

function getComputerChoice() {
    let computerChoice = choice[Math.floor(Math.random()*choice.length)];
    console.log(computerChoice);
}

// 2. write function that plays single round. Takes two parameters - player selection and computer selection.
// Returns the deciding winner with a string.




// Make the player selection case-insensitive.

// 3. New function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a
// winner or loser at the end. Use a for loop.
// Use a console.log to display the results of each round and the winner at the end.

// 4. prompt to get user input.






function playRound(playerSelection, computerSelection) {
    // your code here!


  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));