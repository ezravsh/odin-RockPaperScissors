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

//const playerSelection = prompt(`Type: "rock", "paper", or "scissors:`);
//const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));

function game(){
    let scoreP = 0;
    let scoreC = 0;
    for (let i = 1; i < 6; i++){
        let result = playRound(prompt(`Type: "rock", "paper", or "scissors:`), computerPlay())
        //console.log(i)
        //console.log(result)
        if (result == "You win!"){
            scoreP +=1;
        } else if (result == "You lose!"){
            scoreC +=1;
        }}
    if (scoreP > scoreC){
        return `The winner is YOU!, your score is ${scoreP}, computer scores ${scoreC}`
    } else if (scoreP === scoreC){
        return `Tie, your score is ${scoreP}, computer scores ${scoreC}`
    } else {
        return `Computer is the winner!, your score is ${scoreP}, computer scores ${scoreC}`
    }
}

console.log(game())