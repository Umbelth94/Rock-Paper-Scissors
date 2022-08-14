let rockPaperScissors = [
    'rock','paper','scissors'
]


function getComputerChoice(){
    let computerChoice = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)]
    // console.log(computerChoice);
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
                if (computerSelection == 'rock'){
                    return 'It was a tie';
                } else if (computerSelection == 'paper'){
                    return 'Paper covers rock, you lose!';
                } else if (computerSelection == 'scissors'){
                    return 'Rock smashes scissors, you win!';
                }
            } else if (lowerCaseSelection == 'paper'){
                if (computerSelection == 'rock'){
                    return 'Paper covers rock, you win!';
                } else if (computerSelection == 'paper'){
                    return 'It was a tie';
                } else if (computerSelection == 'scissors'){
                    return 'Scissors cuts paper, you lose';
                }
            } else if (lowerCaseSelection == 'scissors'){
                if (computerSelection == 'rock'){
                    return 'Your scissors got smashed, you lose';
                } else if (computerSelection == 'paper') {
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

console.log(playRound());