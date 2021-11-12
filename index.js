// return rock paper scissor randomly
const rps = ["Rock", "Paper", "Scissors"]
const computerPlay = () => rps[Math.floor(Math.random()*3)]
//console.log(computerPlay)
function playRound(playerSelection, computerSelection){
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();
    if (player == computer){
        return "Tie"
    } else if ((player == "rock" && computer == "scissors") 
    || (player == "paper" && computer == "rock")
    || (player == "scissors" && computer == "paper")){
        return "You win!"
    } else {
        return "You lose!"
    }
    }

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));