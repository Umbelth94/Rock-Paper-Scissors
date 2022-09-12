let rockPaperScissors = [
    'rock','paper','scissors'
]

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const resetButton = document.querySelector('#reset');
const displayPlayerPoints = document.querySelector('#playerscore');
const displayComputerPoints = document.querySelector('#computerscore');
const displayResult = document.querySelector('#result');
const displayRound = document.querySelector('#rounds');
const displayComputerActions = document.querySelector('#computeractions');
const displayPlayerActions = document.querySelector('#playeractions');
const allDivs = document.querySelectorAll('div');
let playerPoints = 0;
let computerPoints = 0;
let rounds = 0;
let playerWin;

resetButton.addEventListener('click',() => {
    let confirmAction = confirm('Are you sure you want to reset scores?');
    if (confirmAction){
    playerPoints = 0;
    computerPoints = 0;
    rounds = 0;
    allDivs.forEach((div) => { 
        div.textContent = ''}); //Makes all divs blank upon hitting reset button
    } else {
        return;
    }
})

rockButton.addEventListener('click', () => {
    if ((playerPoints < 5) && (computerPoints < 5)){
    playRound('rock',getComputerChoice());
    displayScore();
    checkPoints(playerPoints,computerPoints); //Checks to see if either player's points are at 5.  Displays message if they are.
    }});

paperButton.addEventListener('click',() =>{
    if ((playerPoints < 5) && (computerPoints < 5)){
    playRound('paper',getComputerChoice())
    displayScore();
    checkPoints(playerPoints,computerPoints);
    }});

scissorsButton.addEventListener('click',() =>{
    if ((playerPoints < 5) && (computerPoints < 5)){
    playRound('scissors',getComputerChoice())
    displayScore();
    checkPoints(playerPoints,computerPoints);
    }});


function displayScore(){
    displayRound.textContent = `Round: ${rounds}`;
    displayPlayerPoints.textContent = `Player points: ${playerPoints}`;
    displayComputerPoints.textContent= `Computer points: ${computerPoints}`;
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
    displayPlayerActions.textContent = `You chose: ${playerSelection}`;
    displayComputerActions.textContent =`The AI chose: ${computerSelection}`;
    // console.log(`Player chose: ${playerSelection}`);
    // if ((playerPoints < 5) && (computerPoints < 5)){    
            //You can probably make this a seperate function to check if they've won, and make the playRound function less cluttered
            if (playerSelection == 'rock'){
                rounds += 1;
                if (computerSelection == 'rock'){
                    displayResult.textContent = 'It was a tie';
                    // return 'It was a tie';
                } else if (computerSelection == 'paper'){
                    computerPoints += 1;
                    displayResult.textContent = 'Paper covers rock, you lose!';
                    // console.log('Paper covers rock, you lose!');
                    // return 'Paper covers rock, you lose!';
                } else if (computerSelection == 'scissors'){
                    playerPoints += 1;
                    displayResult.textContent = 'Rock smashes scissors, you win!';
                    // console.log('Rock smashes scissors, you win!');
                    // return 'Rock smashes scissors, you win!';
                }
            } else if (playerSelection == 'paper'){
                rounds += 1;
                if (computerSelection == 'rock'){
                    playerPoints += 1;
                    displayResult.textContent = 'Paper covers rock, you win!';
                    // return 'Paper covers rock, you win!';
                } else if (computerSelection == 'paper'){
                    displayResult.textContent = 'It was a tie';
                    // return 'It was a tie';
                } else if (computerSelection == 'scissors'){
                    computerPoints += 1;
                    displayResult.textContent = 'Scissors cuts paper, you lose';
                    // return 'Scissors cuts paper, you lose';
                }
            } else if (playerSelection == 'scissors'){
                rounds += 1;
                if (computerSelection == 'rock'){
                    computerPoints += 1;
                    displayResult.textContent = 'Your scissors got smashed, you lose';
                    // return 'Your scissors got smashed, you lose';
                } else if (computerSelection == 'paper') {
                    playerPoints += 1;
                    displayResult.textContent = 'Your scissors slice the paper, you win!';
                    // return 'Your scissors slice the paper, you win!';
                } else if (computerSelection == 'scissors'){
                    displayResult.textContent = 'Hot scissor action... Its a tie';
                    // return 'Hot scissor action... Its a tie';
                }}  
            };
      

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