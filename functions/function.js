function getComputerChoice(){
    let choices = new Array("rock", "paper", "scissors");
    let random = Math.floor(Math.random() * 3);
    return choices[random];
}

function getHumanChoice() {
    let choice = prompt("Enter your choice: rock, paper, or scissors");
    choice = choice.toLowerCase();
    if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        console.log("Invalid choice. Please enter rock, paper, or scissors.");
        return getHumanChoice();
    }
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            return "Computer wins!";
        } else {
            return "You win!";
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            return "Computer wins!";
        } else {
            return "You win!";
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            return "Computer wins!";
        } else {
            return "You win!";
        }
    }
}

function playGame() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    console.log("Computer choice: " + computerChoice);
    console.log("Human choice: " + humanChoice);
    console.log(playRound(humanChoice, computerChoice));
}

