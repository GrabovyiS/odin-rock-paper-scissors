// Get user input
function getPlayerSelection() {

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

}