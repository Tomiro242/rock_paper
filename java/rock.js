console.log("Hell World")

const option = ["rock", "paper", "scissors"];
let playerscore = 0;
let computerscore = 0;

function getComputerChoice(){
    const choice = option [ Math.floor(Math.random() * option.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "tie";
    }else if((playerSelection =="rock" && computerSelection == "scissors")||
             (playerSelection == "scissors" && computerSelection == "paper")||
             (playerSelection == "paper" && computerSelection == "rock")){
                return "player";
   }else{
        return "computer";
   }
}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "tie"){
        return "its a tie";
    }else if(result == "player"){
        return `you win! ${playerSelection} beats ${computerSelection}`
    }else{
        return`you loose ${computerSelection} beats ${playerSelection}`
    }
}

const playerSelection = prompt("rock paper scissors");
const computerSelection = getComputerChoice();
console.log (playRound(playerSelection, computerSelection))



function playGame(){
    for(let i =0; i < 5; i++){
        const playerSelection = "rock";
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));}
        if (checkWinner(playerSelection , computerSelection) == "player"){
            playerscore++;
        }else if (checkWinner(playerSelection, computerSelection) == "computer"){
            computerscore++;
        }
        if (playerscore > computerscore){
            console.log("player wins")
        }else if(playerscore < computerscore){
            console.log("computer wins")
        }else{
            console.log("It's a tie!")
        }
    
    }



playGame();
