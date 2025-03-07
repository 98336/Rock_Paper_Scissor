


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
let roundCount = 0;

function playGame(humanChoice) {

    let computerChoice = getComputerChoice();
    
    highlightComputerChoice(computerChoice);
    let table = document.getElementById('scoreTable').querySelector('tbody');

    let resultMessage = "";
    let winner = "";
    if (computerChoice === 'rock' && humanChoice === 'scissor' || computerChoice === 'scissor' && humanChoice === 'paper' || computerChoice === 'paper' && humanChoice === 'rock') {
        resultMessage=`${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissor' || humanChoice === 'scissor' && computerChoice === 'paper' || humanChoice === 'paper' && computerChoice === 'rock') {
        resultMessage=`${humanChoice} beats ${computerChoice}`;
        humanScore++;
    }
    else if(humanChoice===computerChoice){
        resultMessage="It's a tie";
    }
    if (roundCount === 0) { 
        document.getElementById("scoreTable").style.display = "table"; 
    }

    if(humanScore>computerScore){
        winner = "User";
    }
    else if(computerScore>humanScore){
        winner="Computer";
    }
    else{
        winner="Tie";
    }

    roundCount++;
    let newRow = `<tr>
    <td>${roundCount}</td>
    <td>${humanChoice}</td>
    <td>${computerChoice}</td>
    <td>${resultMessage}</td>
    <td>${humanScore}</td>
    <td>${computerScore}</td>
    <td>${winner}</td>
    </tr>`;

    table.innerHTML += newRow;
    if (humanScore >= 5 || computerScore >= 5) {
        setTimeout(() => {
            alert(`Game Over! ${winner} wins.`);

            
            let finalRow = document.querySelector("tfoot tr th:last-child");
            if (finalRow) {
                finalRow.innerText = winner;
            }
        }, 100); 
    }
}

function highlightComputerChoice(choice){
    document.querySelectorAll('.btn-container button').forEach(button =>{
        button.classList.remove('highlight');
 } );

 let selectedButton = document.getElementById(`c-${choice}`);
 if (selectedButton) {
    selectedButton.classList.add("highlight");
}
}







