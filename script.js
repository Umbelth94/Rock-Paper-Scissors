let rockPaperScissors = [
    'Rock','Paper','Scissors'
]


function getComputerChoice(){
    let computerChoice = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)]
    // console.log(computerChoice);
    return computerChoice;
}

// let playerSelection = window.prompt('Rock, paper, or Scissors?');
//Later, create a prompt that plays this function out
function playRound(playerSelection,computerSelection){
    computerSelection = getComputerChoice(); //Get the randomly returned computer's choice;
    if (typeof playerSelection === 'string'){
        if (playerSelection.toLowerCase() == 'rock' 
        || playerSelection.toLowerCase() == 'paper' 
        || playerSelection.toLowerCase() == 'scissors'){
            console.log('Correct options have been made, the game will play');
            return '1';
        } else {
            console.log('Noooope');
            return '0';
        }
    } else {
        return 'That is not an option';
    }
    //Create variable to store result as playerSelection
    //Check to see if playerSelection is a string
        //Lowercase each of the string options so that casing doesn't matter
        //Check that it is either Rock, Paper, or Scissors
            //If not, yell at them and ask them with a new prompt
    //Get the computerselection variable to equal the result from getComputerChoice
    //Compare each possible answer from each.
        //If playerSlection = rock
            //Rock vs Rock = tie
            //Rock vs Paper = lose
            //Rock vs Scissors = win
        //If playerSelection = paper
            //paper vs Rock = win
            //paper vs paper = tie
            //paper vs scissors = lose
        //If playerSelection = scissors
            //scissors vs rock = lose
            //scissors vs paper = win
            //scissors vs scissors = tie;
    //Return result of game via string
}

playerSelection = 'Rock';
computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));