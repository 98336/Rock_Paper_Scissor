function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3);
    let choice;
    if (compChoice === 0) {
        choice = 'rock';
    }
    else if (compChoice === 1) {
        choice = 'paper';
    }
    else {
        choice = 'scissor';
    }
    return choice;
}


let humanScore = 0;
let computerScore = 0;

function playGame() {
    let computerChoice = getComputerChoice();
     let humanChoice = prompt("Enter your choice (rock, paper, scissor): ");

     console.log(`computer choice is ${computerChoice}`);
     console.log(`Your choice is ${humanChoice}`);

    if (computerChoice === 'rock' && humanChoice === 'scissor' || computerChoice === 'scissor' && humanChoice === 'paper' || computerChoice === 'paper' && humanChoice === 'rock') {
        console.log(`${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissor' || humanChoice === 'scissor' && computerChoice === 'paper' || humanChoice === 'paper' && computerChoice === 'rock') {
        console.log(`${humanChoice} beats ${computerChoice}`);
        humanScore++;
    }
    else if(humanChoice===computerChoice){
        console.log("It's a tie");
    }
    console.log(`Your score : ${humanScore}`);
    console.log(`Computer Score : ${computerScore}`);
    
}

for(let i=1; i<=5; i++){
    console.log(`Round ${i} : `);
    playGame();
}

if(humanScore>computerScore){
    console.log(`You have won with score of ${humanScore}`);
}
else if(computerScore>humanScore){
    console.log(`Computer has won with score of ${computerScore}`);
}
else{
    console.log(`It's a tie with score of ${humanScore}`);
}
