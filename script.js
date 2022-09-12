let rockPaperScissors = [
    'rock','paper','scissors'
]

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const displayPlayerPoints = document.querySelector('#playerscore');
const displayComputerPoints = document.querySelector('#computerscore');
const displayResult = document.querySelector('#result');

rockButton.addEventListener('click', () => {
    if ((playerPoints < 5) && (computerPoints < 5)){
    playRound('rock',getComputerChoice());
    displayPlayerPoints.textContent = `Player points: ${playerPoints}`;
    displayComputerPoints.textContent = `Computer points: ${computerPoints}`;
    checkPoints(playerPoints,computerPoints);
    }});

paperButton.addEventListener('click',() =>{
    if ((playerPoints < 5) && (computerPoints < 5)){
    playRound('paper',getComputerChoice())
    displayPlayerPoints.textContent = `Player points: ${playerPoints}`;
    displayComputerPoints.textContent= `Computer points: ${computerPoints}`;
    checkPoints(playerPoints,computerPoints);
    }});

scissorsButton.addEventListener('click',() =>{
    if ((playerPoints < 5) && (computerPoints < 5)){
    playRound('scissors',getComputerChoice())
    displayPlayerPoints.textContent = `Player points: ${playerPoints}`;
    displayComputerPoints.textContent = `Computer points: ${computerPoints}`;
    checkPoints(playerPoints,computerPoints);
    }});

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
    // playerSelection = window.prompt('Rock, paper, or scissors?');
    computerSelection = getComputerChoice(); //Get the randomly returned computer's choice;
    console.log(`The AI chose: ${computerSelection}`);
    console.log(`Player chose: ${playerSelection}`);
    if ((playerPoints < 5) && (computerPoints < 5)){    
            //You can probably make this a seperate function to check if they've won, and make the playRound function less cluttered
            if (playerSelection == 'rock'){
                rounds += 1;
                if (computerSelection == 'rock'){
                    displayResult.textContent = 'It was a tie';
                    return 'It was a tie';
                } else if (computerSelection == 'paper'){
                    computerPoints += 1;
                    displayResult.textContent = 'Paper covers rock, you lose!';
                    // console.log('Paper covers rock, you lose!');
                    return 'Paper covers rock, you lose!';
                } else if (computerSelection == 'scissors'){
                    playerPoints += 1;
                    displayResult.textContent = 'Rock smashes scissors, you win!';
                    // console.log('Rock smashes scissors, you win!');
                    return 'Rock smashes scissors, you win!';
                }
            } else if (playerSelection == 'paper'){
                rounds += 1;
                if (computerSelection == 'rock'){
                    playerPoints += 1;
                    displayResult.textContent = 'Paper covers rock, you win!';
                    return 'Paper covers rock, you win!';
                } else if (computerSelection == 'paper'){
                    displayResult.textContent = 'It was a tie';
                    return 'It was a tie';
                } else if (computerSelection == 'scissors'){
                    computerPoints += 1;
                    displayResult.textContent = 'Scissors cuts paper, you lose';
                    return 'Scissors cuts paper, you lose';
                }
            } else if (playerSelection == 'scissors'){
                rounds += 1;
                if (computerSelection == 'rock'){
                    computerPoints += 1;
                    displayResult.textContent = 'Your scissors got smashed, you lose';
                    return 'Your scissors got smashed, you lose';
                } else if (computerSelection == 'paper') {
                    playerPoints += 1;
                    displayResult.textContent = 'Your scissors slice the paper, you win!';
                    return 'Your scissors slice the paper, you win!';
                } else if (computerSelection == 'scissors'){
                    displayResult.textContent = 'Hot scissor action... Its a tie';
                    return 'Hot scissor action... Its a tie';
                }}  
            }};
        // checkPoints(playerPoints,computerPoints)}; //This is an attempt to get the above function to END when 5 points have been reached 

function checkPoints(playerPoints,computerPoints){
    if ((playerPoints == 5) || (computerPoints == 5)){
        decideWinner();
    }
}

function decideWinner(){
    if (playerPoints > computerPoints){
        displayResult.textContent = 'Player is the winner! Congratulations';
    } else {
        displayResult.textContent = 'Computer is the winner... you should practice more';
    }
};


// funcion game(){
//     roundsToPlay = window.prompt('How many rounds would you like to play?');
//     console.log(`You are playing to ${roundsToPlay} rounds`);
//         for (let i = 0; i < roundsToPlay; i++){
//             console.log(playRound());
//             console.log(getScore());
//         }
//         if (playerPoints > computerPoints){
//             return 'Congratulations, you win';
//         } else if (playerPoints < computerPoints){
//             return 'Oh shucks, you lose';
//         } else {
//             return 'Oh wow, it was a tie';
//         }

   
// }

// console.log(g