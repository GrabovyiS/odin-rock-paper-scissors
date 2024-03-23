let playerScore = 0;
let computerScore = 0;
let numberOfRounds = 0;

const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

const buttonChooseRock = document.querySelector('#buttonChooseRock');
const buttonChoosePaper = document.querySelector('#buttonChoosePaper');
const buttonChooseScissors = document.querySelector('#buttonChooseScissors');

const playerButtons = document.querySelector('#playerButtons');
const resultOutput = document.querySelector('#result');

playerButtons.addEventListener('click', listenToPlayerButtons);

// Get user input
function listenToPlayerButtons(event) {
  switch (event.target.id) {
    case 'buttonChooseRock':
      playRound(ROCK, getComputerSelection());
      return;
      
    case 'buttonChoosePaper':
      playRound(PAPER, getComputerSelection());
      return;

    case 'buttonChooseScissors':
      playRound(SCISSORS, getComputerSelection());
      return;

    default:
      return;
  }
}

// Randomize and get computer's turn
function getComputerSelection() {
  let option = Math.floor(Math.random() * 3);

  switch (option) {
    case 0:
      return 'rock';
      break;
  
    case 1:
      return 'paper';
      break;

    case 2:
      return 'scissors';
      break;
  }
}

function playRound(playerSelection, computerSelection) {
  numberOfRounds++;

  if ((playerSelection === 'rock' && computerSelection === 'scissors' ||
      playerSelection === 'scissors' && computerSelection === 'paper' ||
      playerSelection === 'paper' && computerSelection === 'rock') && 
      playerSelection !== computerSelection) {
    playerScore++;
  } else if (playerSelection !== computerSelection) {
    computerScore++;
  }
  
  resultOutput.textContent = `Player score: ${playerScore} Computer score: ${computerScore}`;
  
  checkEndOfGame(playerScore, computerScore);
}

// Play a five round match of rock paper scissors and keeps score
function checkEndOfGame(playerScore, computerScore) {
  if (playerScore < 5 && computerScore < 5) {
    return;
  }

  if (playerScore > computerScore) {
    resultOutput.textContent = `Player is the winner! the score is: \nplayer - ${playerScore} \ncomputer - ${computerScore}`;
    return 'player';
  } else if (playerScore < computerScore) {
    resultOutput.textContent = `Computer is the winner! the score is: \nplayer - ${playerScore} \ncomputer - ${computerScore}`;
    return 'computer';
  } else {
    resultOutput.textContent = `It's a tie! the score is: \nplayer - ${playerScore} \ncomputer - ${computerScore}`;
    return 'tie';
  }
}

