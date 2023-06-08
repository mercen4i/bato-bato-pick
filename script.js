function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3);
    if (randNum == 0) return "Rock";
    else if (randNum == 1) return "Paper";
    else return "Scissors";
}

function playRound(playerSelection, computerSelection) {
    getComputerChoice;
    if ((playerSelection.toUpperCase() === "ROCK") && (computerSelection.toUpperCase() === "SCISSORS")) {
        return "You win! Rock beats Scissors";
    } else if ((playerSelection.toUpperCase() === "PAPER") && (computerSelection.toUpperCase() === "ROCK")) {
        return "You win! Paper beats Rock";
    } else if ((playerSelection.toUpperCase() === "SCISSORS") && (computerSelection.toUpperCase() === "PAPER")) {
        return "You win! Scissors beats Paper";
    } else if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return "It's a tie! Score does not count"
    } else {
        playerSelection = playerSelection.toLowerCase();
        playerSelection = playerSelection.replace(playerSelection.charAt(0), playerSelection.charAt(0).toUpperCase());
        computerSelection = computerSelection.toLowerCase();
        computerSelection = computerSelection.replace(computerSelection.charAt(0), computerSelection.charAt(0).toUpperCase());
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game(e) {
    const playerSelection = e.srcElement['id'];
    const computerSelection = getComputerChoice();
    let round = playRound(playerSelection, computerSelection);
    if (round.charAt(4) === "w") playerScore++;
    else if (round.charAt(4) === "l") computerScore++;
    roundResult.textContent = round;
    score.textContent = `Score: ${playerScore} - ${computerScore}`;
    container.appendChild(roundResult);
    container.appendChild(score);
    if ((playerScore === 5) || (computerScore === 5)) {
        if (playerScore > computerScore) {
            message.textContent = "Congratulations, You Won!";
        } else message.textContent = "You Lost! Try again next time.";
        container.appendChild(message);
        buttons.forEach((button) => {
            button.setAttribute("disabled", "");
        });
        container.appendChild(playAgainButton);
        playAgainButton.addEventListener('click', playAgain);
    }
}

function playAgain() {
    playerScore = 0;
    computerScore = 0;
    container.removeChild(roundResult);
    container.removeChild(score);
    container.removeChild(message);
    container.removeChild(playAgainButton);
    buttons.forEach((button) => {
        button.removeAttribute("disabled");
    });
}

const buttons = document.querySelectorAll('button');
const container = document.querySelector('.container');
const roundResult = document.createElement('div');
const score = document.createElement('div');
const message = document.createElement('div');
const playAgainButton = document.createElement('button');
playAgainButton.textContent = "Play Again";

let playerScore = 0;
let computerScore = 0;
buttons.forEach((button) => {
    button.addEventListener('click', game)
});

// If either the player or computer reaches a score of 5, the game will stop and display a message "You win" or "You Lose"
// Display a play again button


// More features that can be added to improve game:
// Add a feature where if a player enters an inappropriate value, the function asks for a value again
// When cancel is selected in the prompt, game exits and a message appears
// Add a play again feature