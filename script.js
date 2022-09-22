let rockPaperScissors = [
    'rock','paper','scissors'
]
//Next Goals
    //Add an option to see a history of each round that can be toggled on/off with a button
    //Pretty up the buttons and UI.  Add style and maybe some effects/pictures
    //Fix bugs:
        //If #history table is not in a div, I can't reset stats and get an error
    //Find a way to also delete the history when I hit the reset button
    //Add the history table functionality to the auto play feature







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





let playerPoints = 0;
let computerPoints = 0;
let rounds = 0;
let playerWin;
let roundsToPlay = 0;
let result = '';



const table = document.querySelector('#table');
const tableBody = document.querySelector('#tablebody')
const row = document.querySelector('.row');

function createRow(playerSelection,computerSelection){
    const newRow = document.createElement('tr');
    newRow.className = 'row';
    tableBody.appendChild(newRow);
    let dataArray = [rounds, playerSelection, computerSelection,result,playerPoints,computerPoints]
    for (let i = dataArray.length - 1; i >= 0; i--){ //Loop is made backwards, else the loop stops halfway
        const rowData = document.createElement('td');
        rowData.textContent = dataArray.shift();
        newRow.appendChild(rowData);
    }};
    // } ray.push(rounds, playerSelection, computerSelection,result,playerPoints,computerPoints);
    
                                    
                                    ////////////////////BUTTONS//////////////////
                                    /////////////////////////////////////////////

//Auto Play Button
const autoPlay = document.querySelector('#autoplay');
autoPlay.addEventListener('click',() => {
    autoGame();
    displayScore();
    toggleElement("table");
});

//Toggle History Button
    const showHistoryButton = document.querySelector('#showhistory')

    showHistoryButton.addEventListener('click',() => {
        toggleElement("table");
    })
    

 //RESET BUTTON
    resetButton.addEventListener('click',() => {
        const allStats = document.querySelectorAll('.stat'); 
        let confirmAction = confirm('Are you sure you want to reset scores?');
        if (confirmAction){
        playerPoints = 0;
        computerPoints = 0;
        rounds = 0;
        historyText.textContent='';
        allStats.forEach((div) => {
            console.log(div); 
            div.textContent = '';
        }); //Makes all divs blank upon hitting reset button
        toggleElement("roundsprompt"); //Brings back the roundsprompt menu
        toggleElement("menu-container"); //hides the menu-buttons
        } else {
                return;
            }
    });

////ROCK PAPER SCISSORS BUTTONNNNSSSSSSS
    rockButton.addEventListener('click', () => {
        if ((playerPoints < roundsToPlay) && (computerPoints < roundsToPlay)){ //Can probably reduce these lines of code into functions
            let computerSelection = getComputerSelection();
            playRound('rock',computerSelection);
            createRow('rock',computerSelection);
            displayScore();
            checkPoints(playerPoints,computerPoints);
    }});

    paperButton.addEventListener('click',() =>{
        if ((playerPoints < roundsToPlay) && (computerPoints < roundsToPlay)){
            let computerSelection = getComputerSelection();
            playRound('paper',computerSelection);
            createRow('paper',computerSelection);
            displayScore();
            checkPoints(playerPoints,computerPoints);
    }});

    scissorsButton.addEventListener('click',(e) =>{
        if ((playerPoints < roundsToPlay) && (computerPoints < roundsToPlay)){
            let computerSelection = getComputerSelection();
            playRound('scissors',computerSelection);
            createRow('scissors',computerSelection);
            displayScore();
            checkPoints(playerPoints,computerPoints);
    }});


const historyText = document.querySelector('#history');
function displayHistory(playerSelection, computerSelection){
    let newData = document.createElement('p');
    newData.textContent = displayScore() + `  Player Selected ${playerSelection}; Computer selected ${computerSelection}`
    historyText.appendChild(newData);
}

function displayScore(){
    displayRound.textContent = `Round: ${rounds}`;
    displayPlayerPoints.textContent = `Player points: ${playerPoints}`;
    displayComputerPoints.textContent= `Computer points: ${computerPoints}`;
    return `Round: ${rounds}, Player Points: ${playerPoints}, Computer points: ${computerPoints}`;
}

function getComputerSelection(){
    let computerChoice = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)]
    return computerChoice;
}


                                                //////MAIN GAME FUNCTIONS/////
                                                /////////////////////////////
function playRound(playerSelection,computerSelection){
    displayPlayerActions.textContent = `You chose: ${playerSelection}`;
    displayComputerActions.textContent =`The AI chose: ${computerSelection}`;
            if (playerSelection == 'rock'){
                rounds += 1;
                if (computerSelection == 'rock'){
                    displayResult.textContent = 'It was a tie';
                    result = 'tie';
                } else if (computerSelection == 'paper'){
                    computerPoints += 1;
                    displayResult.textContent = 'Paper covers rock, you lose!';
                    result = 'loss';
                } else if (computerSelection == 'scissors'){
                    playerPoints += 1;
                    displayResult.textContent = 'Rock smashes scissors, you win!';
                    result = 'win';
                }
            } else if (playerSelection == 'paper'){
                rounds += 1;
                if (computerSelection == 'rock'){
                    playerPoints += 1;
                    displayResult.textContent = 'Paper covers rock, you win!';
                    result = 'win';
                } else if (computerSelection == 'paper'){
                    displayResult.textContent = 'It was a tie';
                    result = 'tie';
                } else if (computerSelection == 'scissors'){
                    computerPoints += 1;
                    displayResult.textContent = 'Scissors cuts paper, you lose';
                    result = 'loss';
                }
            } else if (playerSelection == 'scissors'){
                rounds += 1;
                if (computerSelection == 'rock'){
                    computerPoints += 1;
                    displayResult.textContent = 'Your scissors got smashed, you lose';
                    result = 'loss';
                } else if (computerSelection == 'paper') {
                    playerPoints += 1;
                    displayResult.textContent = 'Your scissors slice the paper, you win!';
                    result = 'win';
                } else if (computerSelection == 'scissors'){
                    displayResult.textContent = 'Hot scissor action... Its a tie';
                    result = 'tie';
                }}  

            
            };
      

function checkPoints(playerPoints,computerPoints){
    if ((playerPoints == roundsToPlay) || (computerPoints == roundsToPlay)){
        decideWinner();
        return true;
    }
}

function decideWinner(){
    if (playerPoints > computerPoints){
        displayResult.textContent = 'Player is the winner! Congratulations';
        return 'Player is the winner! Congratulations!'
    } else {
        displayResult.textContent = 'Computer is the winner... you should practice more';
        return 'Computer is the winner... you should practice more';
    }
};

function autoGame(){
        while (!checkPoints(playerPoints,computerPoints)){
            let playerSelection = getComputerSelection();
            let computerSelection = getComputerSelection();
            playRound(playerSelection,computerSelection);
            createRow(playerSelection,computerSelection);;
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

const roundsInput = document.querySelector('#roundstoplay')
roundsInput.addEventListener('keydown',(e) => {
    if (e.key == 'Enter'){
        roundsToPlay = roundsInput.value;
        toggleElement("roundsprompt");
        toggleElement("menu-container");
    }
});