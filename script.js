var playerChoice = "rock";
const maxScore = 5;
var computerScore = 0;
var playerScore = 0;
const buttons = document.querySelectorAll("button");

function setScore(player){
    if(player == "player"){
        playerScore += 1;
        document.querySelector(".playerScore").textContent = playerScore;
    }else if(player =="computer"){
        computerScore += 1
        document.querySelector(".computerScore").textContent = playerScore;
    }
    

}
    

buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        
        if(playerScore < maxScore && computerScore < maxScore){
            setScore(playRound(button.dataset.selection, getComputerChoice()));
        }
        if(playerScore == maxScore){
            document.querySelector(".title").textContent = "Player Wins!"
            
        }else if(computerScore == maxScore){
            document.querySelector(".title").textContent = "Computer Wins!"
        }
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

    if (playerSelection == computerSelection){
        return "draw";
    }
    switch(playerSelection){
        case "rock":
            if(computerSelection == "paper"){
                return "computer";
            }else{
                return "player"
            }

            break;
        case "paper":
            if(computerSelection == "rock"){
                return "player";
            }else{
                return "computer"
            }

            break;
        case "scissors":
            if(computerSelection == "paper"){
                return "player";
            }else{
                return "computer";
            }
            break;
        default:
            return("Please type, 'Rock' 'Paper' or 'Scissors'");
    }

    

}

function game(){
  
    
}