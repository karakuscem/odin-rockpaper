// Select elements
const playerScore = document.querySelector(".p-count");
const computerScore = document.querySelector(".c-count");
const rounds = document.querySelector(".rounds");
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const reloadBtn = document.querySelector(".reload");
const computerSelected = document.querySelector(".c-selected");
const result = document.querySelector(".result");
const textChange = document.querySelector(".move");
const chooseMove = document.querySelector(".move")
const options = [rockBtn, paperBtn, scissorsBtn];

// Define some variables
let round = 10;
let p_score = 0;
let c_score = 0;

// Count rounds
function countRound() {
    round -= 1;
    rounds.textContent = `Rounds Left: ${round}`;
    return round;
}

// Make computer selects rock,paper or scissors randomly
function computerPlay() {
    const computerSelection = ["rock", "paper", "scissors"];
    const chooseRandom = computerSelection[Math.floor(Math.random() * computerSelection.length)];
    computerSelected.style.display = "flex";
    computerSelected.textContent = `Computer Selected: ${chooseRandom.toUpperCase()}`;
    return (chooseRandom);
}
// End of the game, show replay button, game over text
function endGame() {
    if (round === 0) {
        options.forEach(option => {
            option.style.display = "none"
        })
    }
    chooseMove.textContent = "Game Over!";
    rounds.style.display = "none";
    if(p_score > c_score) {
        result.style.fontSize = "2rem";
        result.textContent = "You Won The Game";
        result.style.color = "green";
    }
    else if (c_score > p_score) {
        result.style.fontSize = "2rem";
        result.textContent = "You Lost The Game";
        result.style.color = "red";
    }
    else {
        result.style.fontSize = "2rem";
        result.textContent = "Tie";
        result.style.color = "white";
    }
    computerSelected.style.display = "none";
    reloadBtn.textContent = "Restart";
    reloadBtn.style.display = "flex";
    reloadBtn.addEventListener("click", () => {
        window.location.reload();
    })
}

// Make player and computer play round
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        result.textContent = "Tie"
    }
    else if (playerSelection == "rock"){
        if (computerSelection == "paper") {
            result.textContent = "Computer Won, Paper beats Rock!";
            c_score++;
            computerScore.textContent = c_score;
        }
        else if (computerSelection == "scissors") {
            result.textContent = "Player Won, Rock beats Scissors!";
            p_score++;
            playerScore.textContent = p_score;
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            result.textContent = "Computer Won, Rock beats Scissors!";
            c_score++;
            computerScore.textContent = c_score;
        }
        else if (computerSelection == "paper") {
            result.textContent = "Player Won, Scissors beats Paper!";
            p_score++;
            playerScore.textContent = p_score;
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            result.textContent = "Computer Won, Scissors beats Paper!";
            c_score++;
            computerScore.textContent = c_score;
        }
        else if (computerSelection == "rock") {
            result.textContent = "Player Won, Paper beats Rock!";
            p_score++;
            playerScore.textContent = p_score;
        }
    }
}

// Function to play game
function playGame() {
        options.forEach(option => {
        option.addEventListener("click", function(){
            countRound();
            playRound(this.innerText, computerPlay());
            if(round == 0){
                endGame();
            }
        })
    })
}

playGame();