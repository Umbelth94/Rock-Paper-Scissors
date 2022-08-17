let rockPaperScissors = [
    'rock','paper','scissors'
]

let playerPoints = 0;
let computerPoints = 0;
let rounds = 0;
let playerWin;

function getScore(){
    return `Round ${rounds}: Player has ${playerPoints}, Computer has ${computerPoints}`
}


function getComputerChoice(){
    let computerChoice = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)]
    return computerChoice;
}

// let playerSelection = window.prompt('Rock, paper, or Scissors?');
//Later, create a prompt that plays this function out
function playRound(playerSelection,computerSelection){
    playerSelection = window.prompt('Rock, paper, or scissors?');
    computerSelection = getComputerChoice(); //Get the randomly returned computer's choice;
    console.log(`The AI chose: ${computerSelection}`);
    console.log(`Player chose: ${playerSelection}`);
    if (typeof playerSelection === 'string'){
        let lowerCaseSelection = playerSelection.toLowerCase();
        if (lowerCaseSelection == 'rock' 
        || lowerCaseSelection == 'paper' 
        || lowerCaseSelection == 'scissors'){
            //You can probably make this a seperate function to check if they've won, and make the playRound function less cluttered
            if (lowerCaseSelection == 'rock'){
                rounds += 1;
                if (computerSelection == 'rock'){
                    return 'It was a tie';
                } else if (computerSelection == 'paper'){
                    computerPoints += 1;
                    return 'Paper covers rock, you lose!';
                } else if (computerSelection == 'scissors'){
                    playerPoints += 1;
                    return 'Rock smashes scissors, you win!';
                }
            } else if (lowerCaseSelection == 'paper'){
                rounds += 1;
                if (computerSelection == 'rock'){
                    playerPoints += 1;
                    return 'Paper covers rock, you win!';
                } else if (computerSelection == 'paper'){
                    return 'It was a tie';
                } else if (computerSelection == 'scissors'){
                    computerPoints += 1;
                    return 'Scissors cuts paper, you lose';
                }
            } else if (lowerCaseSelection == 'scissors'){
                rounds += 1;
                if (computerSelection == 'rock'){
                    computerPoints += 1;
                    return 'Your scissors got smashed, you lose';
                } else if (computerSelection == 'paper') {
                    playerPoints += 1;
                    return 'Your scissors slice the paper, you win!';
                } else if (computerSelection == 'scissors'){
                    return 'Hot scissor action... Its a tie';
                }
            }
        } else {
            alert('That is not a rock, paper, OR scissor');
            return;
        }
    } else {
        return 'That is not an option';
    }
}

function game(){
    roundsToPlay = window.prompt('How many rounds would you like to play?');
    console.log(`You are playing to ${roundsToPlay} rounds`);
        for (let i = 0; i < roundsToPlay; i++){
            console.log(playRound());
            console.log(getScore());
        }
        if (playerPoints > computerPoints){
            return 'Congratulations, you win';
        } else if (playerPoints < computerPoints){
            return 'Oh shucks, you lose';
        } else {
            return 'Oh wow, it was a tie';
        }

   
}

console.log(game());