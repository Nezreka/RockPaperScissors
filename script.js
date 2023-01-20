const playerChoice = "rock";

function getComputerChoice(){
    var randomNum = Math.random()*10;
    if(randomNum < 3){
        return "rock";
    }else if(randomNum > 6){
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
                return "Computer loses! Scissors Beats Paper"
            }

            break;
        case "scissors":
            if(computerSelection == "paper"){
                return "Player Wins! Scissors Beats Paper";
            }else{
                return "Computer Wins! Rock Beats Scissors"
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
    
    for(i = 0; i < maxScore; i++){
        winner = playRound(prompt("Rock, Paper, Scissors?"), getComputerChoice());
        console.log(winner)
        if(winner.split(" ")[0] == "Player"){
            playerScore += 1;
        }else{
            computerScore += 1;
        }
        
    }
    if(playerScore > computerScore){
        return "Player Wins!"
    }else if(computerScore > playerScore){
        return "Computer Wins!"
    }else{
        return "Draw Game!"
    }
}

console.log(game())



