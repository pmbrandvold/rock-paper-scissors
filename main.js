let computerScore = 0;
let playerScore = 0;
let roundCounter = 1;

let playerButtonPress = '';

updateScore();

const newGameButton = document.getElementById('newGame');
const instructions = document.getElementById('instructions');

function computerPlay() {
  let choice = Math.floor((Math.random() * 3) + 1); //get random int from 1 to 3
  switch (choice) {
    case 1:
      return "ROCK";
      break;
    case 2:
      return "PAPER";
      break;
    case 3:
      return "SCISSORS";
      break;
    default:
      return "Something has gone wrong!"
  }
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection == "ROCK" && playerSelection == "SCISSORS") {
      alert("You lose. Rock beats Scissors");
      ++roundCounter;
      ++computerScore;
      updateScore();
    } else if (computerSelection == "PAPER" && playerSelection == "ROCK") {
      alert("You lose. Paper beats Rock");
      ++roundCounter;
      ++computerScore;
      updateScore();
    } else if (computerSelection == "SCISSORS" && playerSelection == "PAPER") {
      alert("You lose. Scissors beats Paper.");
      ++roundCounter;
      ++computerScore;
      updateScore();
    } else if (computerSelection == playerSelection) {
      alert("It's a draw, try again!");
    } else {
      alert("You win!");
      ++roundCounter;
      ++playerScore;
      updateScore();
    }
  }

  function createButtons() {
    const gamePlayButtons = document.getElementById('gamePlayButtons');
    const rockButton = document.createElement('button');
    rockButton.innerHTML = ('Rock');
    const paperButton = document.createElement('button');
    paperButton.innerHTML = ('Paper');
    const scissorsButton = document.createElement('button');
    scissorsButton.innerHTML = ('Scissors');

    gamePlayButtons.appendChild(rockButton);
    gamePlayButtons.appendChild(paperButton);
    gamePlayButtons.appendChild(scissorsButton);

    rockButton.className = 'gameButtons';
    paperButton.className = 'gameButtons';
    scissorsButton.className = 'gameButtons';

    newGameButton.style.display = 'block';
    instructions.style.display = 'block';

    let play = document.getElementsByClassName('gameButtons');
    for (let i = 0; i <= 2; i++) {
      play[i].addEventListener('click', function(){
        if (play[i].innerHTML === "Rock") {
          playerButtonPress = "Rock".toUpperCase();
        } else if (play[i].innerHTML === "Paper") {
          playerButtonPress = "Paper".toUpperCase();
        } else {
          playerButtonPress = "Scissors".toUpperCase();
        }
        play[i].addEventListener('click', playGame);
      });
    }
  }

  function updateScore() {
    if (roundCounter > 5) {
      document.getElementById('countRound').innerHTML = "Game Over"
    } else {
      document.getElementById('countRound').innerHTML = "Round: " + roundCounter;
      document.getElementById('scorePlayer').innerHTML = "Player: " + playerScore;
      document.getElementById('scoreComputer').innerHTML = "Computer: " + computerScore;
    }
  }
const startGame = document.getElementById('startButton')
startGame.addEventListener('click', createButtons);


function playGame() {
  if (roundCounter > 5) {
    alert('Game Over!');
    return 0;
  }
  if (playerButtonPress === "ROCK") {
    playRound('ROCK', computerPlay());
  } else if (playerButtonPress === "PAPER") {
    playRound('PAPER', computerPlay());
  } else if (playerButtonPress === "SCISSORS") {
    playRound('SCISSORS', computerPlay());
  }
}

newGameButton.addEventListener('click', function() {location.reload()});
