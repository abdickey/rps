let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    const randomNum = Math.floor(Math.random() * 3) + 1;

    switch (randomNum) {
        case 1:
            return "Rock"
        case 2:
            return "Paper"
        case 3:
            return "Scissors"
    }
}

function getHumanChoice(){
    let humanChoice = prompt("Enter Rock, Paper, or Scissors");

    if (humanChoice) {
        humanChoice = humanChoice.toLowerCase();
        humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1);
        console.log(humanChoice)
    } else {
        console.log("No valid choice entered.");
        return null;
    }

    return humanChoice
}

function playRound(humanChoice, computerChoice){

    if (humanChoice == 'Rock' && computerChoice == "Rock"){
        console.log("Tie!")
    } else if (humanChoice == 'Rock' && computerChoice == "Paper") {
        console.log("You lose, paper beats rock");
        computerScore++;
    } else if (humanChoice == 'Rock' && computerChoice == "Scissors") {
        console.log("You win, Rock beats scissors");
        humanScore++;
    } else if (humanChoice == 'Paper' && computerChoice == "Rock") {
        console.log("You win, paper beats rock");
        humanScore++;
    } else if (humanChoice == 'Paper' && computerChoice == "Paper") {
        console.log("Tie!");
    } else if (humanChoice == 'Paper' && computerChoice == "Scissors") {
        console.log("You lose, scissor beats paper");
        computerScore++;
    } else if (humanChoice == 'Scissors' && computerChoice == "Rock") {
        console.log("You lose, rock beats scissors");
        computerScore++;
    } else if (humanChoice == 'Scissors' && computerChoice == "Paper") {
        console.log("You win, scissors beats paper");
        humanScore++;
    } else if (humanChoice == 'Scissors' && computerChoice == "Scissors"){
        console.log("Tie!");
    }
}

function playGame(){

    for (let i = 0; i <=4; i++){
        playRound(getHumanChoice(), getComputerChoice());
        console.log("Human:", humanScore)
        console.log("Computer:", computerScore)
    }

    if (humanScore > computerScore) {
        console.log("Human is the winner")
    } else if (humanScore < computerScore) {
        console.log("Computer is the winner")
    }

}

playGame();

