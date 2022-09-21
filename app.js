// Step ONE: cache the DOM
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector("score-board");
const result_p = document.querySelector(".results > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const reset_div = document.getElementById("reset");
const modal_div = document.getElementById("modal");
const overlay_div = document.getElementById("overlay")
const playAgain_button = document.querySelector(".play-again");
const gameOverMsg_p = document.querySelector(".game-over-msg");


// Step TWO: Event listeners, game logic, display results in the DOM
// when user clicks on a button, take the value of the button, and then
// compare with computers choice.


// get a random computer choice of RPS;
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

// game logic;
// include separate functions for wins, losses and draws;
// NEVER jam all the logic in one function;
// when User wins we increase users score by 1.


function reset() {
    userScore = 0;
    computerScore = 0;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
}


// This is new way of using if statement. 
// return stops the function and does not execute code below it.
function convertToWord(letter) {
    if(letter === 'r') return "Rock";
    if(letter === 'p') return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3);
    const smallCompWord = "comp".fontsize(3);
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    gameOver();
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}, You win! 🔥`;
    userChoice_div.classList.add('green-glow');
    setTimeout(function() { userChoice_div.classList.remove('green-glow') }, 300);
}

function lose(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3);
    const smallCompWord = "comp".fontsize(3);
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    gameOver();
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}, You lost! 💩`;
    userChoice_div.classList.add('red-glow');
    // ES6 style function example
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3);
    const smallCompWord = "comp".fontsize(3);
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}, Its a draw ❌`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(function() { userChoice_div.classList.remove('gray-glow') }, 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":   
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "sr":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function winMsg() {
    if (userScore === 5) {
        gameOverMsg_p.innerHTML = 'You WON! 🔥';
    } else if (computerScore === 5) {
        gameOverMsg_p.innerHTML = 'You LOST... 💩';
    } else {
        return;
    }
}

function gameOver() {
    if (userScore === 5 || computerScore === 5) {
        openModal();
        winMsg();
     }
    playAgain_button.addEventListener('click', function() {
        closeModal();
    })
}

function openModal() {
    modal_div.classList.add('active');
    overlay_div.classList.add('active');
}

function closeModal() {
    modal_div.classList.remove('active');
    overlay_div.classList.remove('active');
    reset();
}



//event listeners for user clicks on images;
function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");
    })

    scissors_div.addEventListener('click', function() {
        game("s");
    })
    reset_div.addEventListener('click', function() {
        reset();
    })
}

main();