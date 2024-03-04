// Get user input
function getPlayerSelection() {
  return prompt('Choose your fighter').toLowerCase();
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
  
}

// Play a five round match of rock paper scissors and keeps score
function playGame() {

}