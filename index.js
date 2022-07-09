function computerPlay() {
    const choice = ["rock", "paper", "scissors"]
    const random = Math.floor(Math.random() * choice.length);
    let selection;
    if (random == 0) {
        selection = "rock";
    }
    else if (random == 1) {
        selection = "paper";
    }
    else if (random == 2) {
        selection = "scissors";
    }
    return ("Computer selects: ", selection);
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            return("Tie!");
        }
    
        if (computerSelection == "paper") {
            return("You Lose! Paper beats Rock");
        }
    
        if (computerSelection == "scissors") {
            return("You Win! Rock beats Scissors");
        }
    }

    else if (playerSelection == "paper") {

        if (computerSelection == "rock") {
            return("You Win! Paper beats Rock");
        }
    
        if (computerSelection == "paper") {
            return("Tie!");
        }
    
        if (computerSelection == "scissors") {
            return("You Lose! Scissors beats Paper");
        }
    }

    else if (playerSelection == "scissors") {

        if (computerSelection == "rock") {
            return("You Lose! Rock beats Scissors");
        }
    
        if (computerSelection == "paper") {
            return("You Win! Scissors beats Paper");
        }
    
        if (computerSelection == "scissors") {
            return("Tie!");
        }
    }

}

function game() {
    playerWins = 0;
    computerWins = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("What's your choice? (rock, paper, scissors)");
        const computerSelection = computerPlay();
        console.log("Player Selection: ", playerSelection, "Computer Selection: ", computerSelection)

        roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);

        if (roundResult == "Tie!") {
            ;
        }

        else if (roundResult == "You Lose! Paper beats Rock") {
            computerWins++;
        }

        else if (roundResult == "You Win! Rock beats Scissors") {
            playerWins++;
        }
        
        else if (roundResult == "You Win! Paper beats Rock") {
            playerWins++;
        }

        else if (roundResult == "You Lose! Scissors beats Paper") {
            computerWins++;
        }

        else if (roundResult == "You Lose! Rock beats Scissors") {
            computerWins++;
        }
        else if (roundResult == "You Win! Scissors beats Paper") {
            playerWins++;
        }

        console.log("Player Score: ", playerWins, "Computer Score: ", computerWins)

    }

    if (playerWins > computerWins) {
        console.log("You Won against Computer! ");
    }

    else if (playerWins < computerWins) {
        console.log("Computer Won against You...");
    }

    else if (playerWins == computerWins) {
        console.log("Game ended Tie!")
    }
}