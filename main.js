// Get user input
function getPlayerSelection() {
  let playerSelection;
  let correctPlayerSelection = false;
  
  while (!correctPlayerSelection){
    playerSelection = prompt('Choose your fighter').toLowerCase();
    if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
      correctPlayerSelection = true;
    }
  }

  return playerSelection;
}

// Randomize and get computer's turn
function getComputerSelection() {
  let option = Math.floor(Math.random() * 3);

  switch (option) {
    case 0:
      return "rock";
      break;
  
    case 1:
      return "paper";
      break;

    case 2:
      return "scissors";
      break;
  }
}

// Play one round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "tie";
  }

  if (playerSelection === "rock" && computerSelection === "scissors" ||
      playerSelection === "scissors" && computerSelection === "paper" ||
      playerSelection === "paper" && computerSelection === "rock") {
      return "player";
  }

  return "computer" 
}

// Play a five round match of rock paper scissors and keeps score
function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    // Call functions, do not pass then as functions
    let winner = playRound(getPlayerSelection(), getComputerSelection());
    if (winner === "computer") {
      computerScore++;
    } else if (winner === "player") {
      playerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log(`Player is the winner! the score is: \nplayer - ${playerScore} \ncomputer - ${computerScore}`)
    return "player";
  } else if (playerScore < computerScore) {
    console.log(`Computer is the winner! the score is: \nplayer - ${playerScore} \ncomputer - ${computerScore}`)
    return "computer";
  } else {
    console.log(`It's a tie! the score is: \nplayer - ${playerScore} \ncomputer - ${computerScore}`)
    return "tie";
  }
}

playGame();