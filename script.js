 
// 1. create a function getComputerChoice to randomly generate rock, paper or scissors and stores to a variable.

let choice = ["scissors", "paper", "rock"];

function getComputerChoice() {
    let computerChoice = choice[Math.floor(Math.random()*choice.length)];
    return computerChoice;
}
console.log(getComputerChoice());

// 2. write function that plays single round. Takes two parameters - player selection and computer selection.
// Returns the deciding winner with a string.

// game starts - playRound function starts.

function playerChoice() {
    let playerSelection = document.getElementById("player").value;
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection);

    if (playerSelection === "rock") {
        ;
    } else if (playerSelection === "scissors") {
        ;
    } else if (playerSelection === "paper") {
        ;
    } else {
        alert("choose either rock, paper or scissors");
        playerSelection = undefined;
        document.getElementById("player").value = " ";
    }
    console.log(playerSelection);
   
    playRound(playerSelection, computerChoice);
}

function playRound (player, computer) {
    
}

// function playRound(playerSelection, computerSelection) {
//   }


// Make the player selection case-insensitive.

// 3. New function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a
// winner or loser at the end. Use a for loop.
// Use a console.log to display the results of each round and the winner at the end.

// 4. prompt to get user input.




