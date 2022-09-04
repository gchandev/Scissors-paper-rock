 
// 1. create a function getComputerChoice to randomly generate rock, paper or scissors and stores to a variable.

let choice = ["scissors", "paper", "rock"];
let computerSelection;

function getComputerChoice() {
    computerSelection = choice[Math.floor(Math.random()*choice.length)];
    return computerSelection;
}
console.log(getComputerChoice());

// 2. write function that plays single round. Takes two parameters - player selection and computer selection.
// Returns the deciding winner with a string.

// game starts - playRound function starts.

function playerChoice() {
    let playerSelection = document.getElementById("player").value;
    playerSelection = playerSelection.toLowerCase();

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
   
    playRound(playerSelection, computerSelection);
}

// playRound function below is initiated as soon as the player clicks submit.
// setout rules of scissor > paper > rock > scissors.
// if they are the same value - alert tie, retry.
let playerScore = 0;
let computerScore = 0;

function playRound (player, computer) {
    if (player === "rock") {
        if (computer === "paper") {
            alert("You loose");
            ++computerScore;
        } else if (computer === "scissors") {
            alert("You win!")
            ++playerScore;
        } else {
            alert("tie");
        }
    } else if (player === "paper") {
        if (computer === "scissors") {
            alert("You loose");
            ++computerScore;
        } else if (computer === "rock") {
            alert("You win!")
            ++playerScore;
        } else {
            alert("tie");
        }
    } else if (player === "scissors") {
        if (computer === "rock") {
            alert("You loose");
            ++computerScore;
        } else if (computer === "paper") {
            alert("You win!")
            ++playerScore;
        } else {
            alert("tie");
        }
    } else {
        alert("player needs to select scissors, paper or rock")
    }
    console.log(playerScore);
    console.log(computerScore);


}

for (let i = 0; i < 5; i++) {
    getComputerChoice();
    playerChoice();
}

// Make the player selection case-insensitive.

// 3. New function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a
// winner or loser at the end. Use a for loop.
// Use a console.log to display the results of each round and the winner at the end.

// 4. prompt to get user input.




