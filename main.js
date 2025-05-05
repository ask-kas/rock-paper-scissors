let humanScore = 0;
let computerScore = 0;
let flag = false;


const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener('click', ()=> playRound('rock', getComputerChoice()));
paper.addEventListener('click', ()=>playRound('paper', getComputerChoice()));
scissors.addEventListener('click', ()=>playRound('scissors', getComputerChoice()));

//console.log(rock);

function getComputerChoice(){
    let num = Math.random() * 3;
    if(num <= 1){ return "rock"; }
    else if(num <= 2 && num > 1){ return "paper";}
    else{ return "scissors"; }
}

function getHumanChoice(){
    //let choice = prompt("Enter either rock, paper, or scissors");

    return choice;
}

const results = document.createElement('div');
const score = document.createElement('div');
const winner = document.createElement('div');

score.setAttribute('style', 'white-space: pre;');

document.body.appendChild(results);
document.body.appendChild(score);
document.body.appendChild(winner);

//https://stackoverflow.com/questions/73098668/javascript-rock-paper-scissors-only-can-return-the-else-value
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    //console.log("Player selection: " + playerSelection);
    if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore += 1;
        results.textContent ="You Lose! Paper beats Rock";
    } else if (playerSelection === 'paper' && computerSelection === "scissors") {
        computerScore += 1;
        results.textContent = "You Lose! Scissors beats Paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore += 1;
        results.textContent = "You Lose! Rock beats Scissors";
    }  else if (playerSelection === "rock" && computerSelection === "scissors") {
        humanScore += 1;
        results.textContent = "You Win! Rock beats Scissors";
    }  else if (playerSelection === "paper" && computerSelection === "rock") { 
        humanScore += 1;    
        results.textContent = "You Win! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        humanScore += 1;
        results.textContent = "You Win! Scissors beats Paper";
    } else {
        results.textContent = "It's a tie";
    }

    if(humanScore == 5 && !flag){
        winner.textContent = "In the finale, human is the winner!!!"
        flag = true;
    }

    if(computerScore == 5 && !flag){
        winner.textContent = "Computer won. This is non-negotiable."
        flag = true;
    }


    score.textContent = "human score: " + humanScore + '\r\n' + "computer score: " + computerScore;
    //alert("blabla");
}

function playGame(){
    // for(let i = 0; i < 5; i++){
    //     let humanChoice = getHumanChoice();
    //     let computerChoice = getComputerChoice();
    //     console.log(playRound(humanChoice, computerChoice));
    // }

    if(humanScore > computerScore){alert("You win!!!");}
    else if(computerScore > humanScore){alert("YOU LOSE...... :PPPPP");}
    else{alert("IT'S A TIEEEEE")}

}

//playGame();

// var addButton = document.getElementById('add');
// addButton.addEventListener('click', addItem);

// var removeButton = document.getElementById('remove');
// removeButton.addEventListener('click', removeItem);

// function addItem(){
//     console.log('Add Button clicked');
// }

// function removeItem(){
//     console.log('Remove Button clicked');
// }