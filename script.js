let rockPaperScissors = [
    'rock','paper','scissors'
]
//Next Goals
//Add an option to see a history of each round that can be toggled on/off with a button
//Pretty up the buttons and UI.  Add style and maybe some effects/pictures
//Hide all buttons at first, and then have them all show up when you hit "start game"
    //Have a button or input that allows you to decide how many rounds you'd like to play to.
    //Include a 'Play for me' button that will just play through the selected amount of rounds.



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
const allStats = document.querySelectorAll('.stat'); //Have an issue with this not wanting to reset
const roundsInput = document.querySelector('#roundstoplay')
let playerPoints = 0;
let computerPoints = 0;
let rounds = 0;
let playerWin;
let roundsToPlay = 0;

resetButton.addEventListener('click',() => {
    let confirmAction = confirm('Are you sure you want to reset scores?');
    if (confirmAction){
    playerPoints = 0;
    computerPoints = 0;
    rounds = 0;
    allStats.forEach((div) => {
        console.log(div); 
        div.textContent = '';
    }); //Makes all divs blank upon hitting reset button
    toggleElement("roundsprompt"); //Brings back the roundsprompt menu
    toggleElement("menu-container"); //hides the menu-buttons
} else {
        return;
    }
})

//buttons
rockButton.addEventListener('click', () => {
    if ((playerPoints < roundsToPlay) && (computerPoints < roundsToPlay)){ //Can probably reduce these lines of code into functions
    playRound('rock',getComputerChoice());
    displayScore();
    checkPoints(playerPoints,computerPoints); //Checks to see if either player's points are at 5.  Displays message if they are.
    console.log(playerPoints);
    console.log
}});
paperButton.addEventListener('click',() =>{
    if ((playerPoints < roundsToPlay) && (computerPoints < roundsToPlay)){
    playRound('paper',getComputerChoice())
    displayScore();
    checkPoints(playerPoints,computerPoints);
    }});
scissorsButton.addEventListener('click',(e) =>{
    if ((playerPoints < roundsToPlay) && (computerPoints < roundsToPlay)){
    playRound('scissors',getComputerChoice())
    console.log(e);
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

function playRound(playerSelection,computerSelection){
    // playerSelection = window.prompt('Rock, paper, or scissors?');
    computerSelection = getComputerChoice(); //Get the randomly returned computer's choice;
    displayPlayerActions.textContent = `You chose: ${playerSelection}`;
    displayComputerActions.textContent =`The AI chose: ${computerSelection}`;
            if (playerSelection == 'rock'){
                rounds += 1;
                if (computerSelection == 'rock'){
                    displayResult.textContent = 'It was a tie';
                } else if (computerSelection == 'paper'){
                    computerPoints += 1;
                    displayResult.textContent = 'Paper covers rock, you lose!';
                } else if (computerSelection == 'scissors'){
                    playerPoints += 1;
                    displayResult.textContent = 'Rock smashes scissors, you win!';
                }
            } else if (playerSelection == 'paper'){
                rounds += 1;
                if (computerSelection == 'rock'){
                    playerPoints += 1;
                    displayResult.textContent = 'Paper covers rock, you win!';
                } else if (computerSelection == 'paper'){
                    displayResult.textContent = 'It was a tie';
                } else if (computerSelection == 'scissors'){
                    computerPoints += 1;
                    displayResult.textContent = 'Scissors cuts paper, you lose';
                }
            } else if (playerSelection == 'scissors'){
                rounds += 1;
                if (computerSelection == 'rock'){
                    computerPoints += 1;
                    displayResult.textContent = 'Your scissors got smashed, you lose';
                } else if (computerSelection == 'paper') {
                    playerPoints += 1;
                    displayResult.textContent = 'Your scissors slice the paper, you win!';
                } else if (computerSelection == 'scissors'){
                    displayResult.textContent = 'Hot scissor action... Its a tie';
                }}  
            };
      

function checkPoints(playerPoints,computerPoints){
    if ((playerPoints == roundsToPlay) || (computerPoints == roundsToPlay)){
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

//Utilize this function for when we want to do the 'auto rounds' player.  
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
};

//Function for toggling an element's visibility 
function toggleElement(elementName){
    let display =  document.defaultView.getComputedStyle(document.getElementById(elementName), null).getPropertyValue("display");;
    if (display == "none"){
        document.getElementById(elementName).style.display = "block";
    } else {
        document.getElementById(elementName).style.display = "none";
    }   
};

//Start Button that makes rest of buttons visible
document.getElementById("start").addEventListener("click", () => {
    console.log('start button clicked');
    toggleElement("start");
    toggleElement("roundsprompt");
});

roundsInput.addEventListener('keydown',(e) => {
    if (e.key == 'Enter'){
        roundsToPlay = roundsInput.value;
        toggleElement("roundsprompt");
        toggleElement("menu-container");
    }
});

// console.log(g