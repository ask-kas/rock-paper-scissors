let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let num = Math.random() * 3;
    if(num <= 1){ return "rock"; }
    else if(num <= 2 && num > 1){ return "paper";}
    else{ return "scissors"; }
}

function getHumanChoice(){
    let choice = prompt("Enter either rock, paper, or scissors");
    return choice;
}

//https://stackoverflow.com/questions/73098668/javascript-rock-paper-scissors-only-can-return-the-else-value
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore += 1;
        return("You Lose! Paper beats Rock");
    } else if (playerSelection === 'paper' && computerSelection === "scissors") {
        computerScore += 1;
        return("You Lose! Scissors beats Paper");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore += 1;
        return("You Lose! Rock beats Scissors");
    }  else if (playerSelection === "rock" && computerSelection === "scissors") {
        humanScore += 1;
        return("You Win! Rock beats Scissors");
    }  else if (playerSelection === "paper" && computerSelection === "rock") { 
        humanScore += 1;    
        return("You Win! Paper beats Rock");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        humanScore += 1;
        return("You Win! Scissors beats Paper");
    } else {
        return("It's tie")
    }
}

function playGame(){
    for(let i = 0; i < 5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log(playRound(humanChoice, computerChoice));
    }

    if(humanScore > computerScore){alert("You win!!!");}
    else if(computerScore > humanScore){alert("YOU LOSE...... :PPPPP");}
    else{alert("IT'S A TIEEEEE")}

}

playGame();