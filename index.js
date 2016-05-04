var userChoice = process.env.USERCHOICE;

function getUserChoice () {
  if (userChoice == 'rock' || userChoice == 'paper' || userChoice == 'scissors') {
    console.log(userChoice);
    return userChoice;

 } else {
    console.log('please enter rock, paper, or scissors');
    process.exit(0);
 }
}


function getComputerChoice () {
  var output = Math.random();
  var computerResponse;
  if (output < 0.33) {
     computerResponse = 'rock';
  } else if (output > .33 && output < .66) {
    computerResponse = 'paper';
  } else {
    computerResponse = 'scissors';
  }
return computerResponse;
}


function compareChoices() {
  var compChoice = getComputerChoice();
  var userChoice = getUserChoice();
  var winnerOutput;
  console.log('computer chooses: ' + compChoice);
  console.log('user chooses: ' + userChoice);
  if(compChoice === userChoice) {
    winnerOutput = 'tie'
  } else if ( compChoice === 'paper' && userChoice === 'rock') {
    winnerOutput = 'paper wins';
  } else if (compChoice === 'paper' && userChoice === 'scissors') {
    winnerOutput = 'scissors wins';
  } else if (compChoice === 'scissors' && userChoice === 'paper') {
    winnerOutput = 'scissors wins';
  } else if (compChoice === 'scissors' && userChoice === 'rock') {
    winnerOutput = 'rock wins';
  } else if (compChoice === 'rock' && userChoice === 'paper') {
    winnerOutput = 'paper wins';
  } else if (compChoice === 'rock' && userChoice === 'scissors') {
    winnerOutput = 'rock wins';
  }
  return winnerOutput;
}

module.exports = console.log(compareChoices());
