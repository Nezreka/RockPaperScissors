var playerChoice = "rock";

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        playerChoice = button.dataset.selection;
        console.log(playerChoice);
    });
});



function getComputerChoice(){
    var randomNum = Math.random()*10;
    if(randomNum < 3.33){
        return "rock";
    }else if(randomNum > 6.66){
        return "paper";
    }else{
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection){
        return "It's a draw!";
    }
    switch(playerSelection){
        case "rock":
            if(computerSelection == "paper"){
                return "Player loses! Paper Beats Rock";
            }else{
                return "Player Wins! Rock Beats Scissors"
            }

            break;
        case "paper":
            if(computerSelection == "rock"){
                return "Player Wins! Paper Beats Rock";
            }else{
                return "Player loses! Scissors Beats Paper"
            }

            break;
        case "scissors":
            if(computerSelection == "paper"){
                return "Player Wins! Scissors Beats Paper";
            }else{
                return "Player Loses! Rock Beats Scissors"
            }
            break;
        default:
            return("Please type, 'Rock' 'Paper' or 'Scissors'");
    }

    

}

function game(){
    var maxScore = 5;
    var computerScore = 0;
    var playerScore = 0;
    
}