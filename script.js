let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let resultsDiv = document.querySelector('.resultsDiv');
let choices = document.getElementById('choices');
let winner = document.querySelector('#winner');
let playAgainButton = document.querySelector('#playAgain');
let headingDiv = document.querySelector('#headingDiv');
let playerSelection = "";
let computerSelection = "";

[ rock, paper, scissors ].forEach(function(element) {
  element.addEventListener('click', function(event) {
    playerSelection = event.target.id;
    computerSelect();
    winner.textContent = determineWinner(playerSelection, computerSelection);
    choices.textContent = `You chose ${playerSelection}, and the computer chose ${computerSelection}.`
    resultsDiv.classList.remove('hidden');
    headingDiv.classList.add('hidden');
  })
});

playAgainButton.addEventListener('click', function(e) {
  resultsDiv.classList.add('hidden');
  headingDiv.classList.remove('hidden');
})

function computerSelect() {
  let arr = ['rock', 'paper', 'scissors'];
  computerSelection = arr[Math.floor(Math.random() * arr.length)];
}

function determineWinner(player, comp) {
  if (player == comp) {
    return `It is a draw!`;
  } else if (player === 'rock') {
    if (comp === 'paper') {
      return `Paper beats rock. Computer wins!`;
    } else {
      return `Rock beats scissors. You win!`;
    }
  } else if (player === 'paper') {
    if (comp === 'scissors') {
      return `Scissors beats paper. Computer wins!`;
    } else {
      return `Paper beats rock. You win!`;
    }
  } else {
    if (comp === 'rock') {
      return `Rock beats scissors. Computer wins!`;
    } else {
      return `Scissors beats paper. You win!`
    }
  }
}
