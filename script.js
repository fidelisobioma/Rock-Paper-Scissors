let humanChoice = document.querySelector(".human_choice");
let computerChoice = document.querySelector(".computer_choice");
let showOverlay = document.querySelector(".overlay");
let playAgain = document.querySelector(".play_again");
let computerTotalScore = document.querySelector(".computer_total_score");
let humanTotalScore = document.querySelector(".human_total_score");
let winner = document.querySelector(".winner");
console.log(showOverlay);

//remove modal to play again
playAgain.addEventListener("click", () => {
  showOverlay.classList.remove("show_overlay");
  location.reload();
});

//Logic to get computer choice
let choice = ["rock", "paper", "scissors"];
function getComputerChoice(randomChoice) {
  randomChoice = choice[Math.floor(Math.random() * choice.length)];
  computerChoice.textContent = randomChoice;
  return randomChoice;
}

//Variables to keep track of players score
let computerScores = document.querySelector(".computer_score");
let humanScores = document.querySelector(".human_score");
let rounds = document.querySelector(".round");
let computerScore = 0;
let humanScore = 0;

//logic to play single round
function playRound(computerChoice, humanChoice) {
  if (
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    // console.log("Computer score:" + " " + (computerScore += 1));
    computerScores.textContent = computerScore += 1;
    computerTotalScore.textContent = computerScore;
    // winner.textContent = "Computer win";
    return computerScore;
  } else if (
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    // winner.textContent = "You win";
    humanScores.textContent = humanScore += 1;
    humanTotalScore.textContent = humanScore;
    return humanScore;
  } else {
    // winner.textContent = "Draw";
  }
}

const buttons = document.querySelectorAll("button");
let round = 0;
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    humanChoice.textContent = button.id;
    playRound(getComputerChoice(), button.id);
    round++;
    //logic to play 5 rounds
    if (round >= 5) {
      //this function will anounce game over if the button has been clicked five times
      playGame();
      //anounce winner after the entire game
      setTimeout(() => {
        showOverlay.classList.add("show_overlay");
      }, 1000);
    } else {
      //anonce how many round the game has been played
      rounds.innerHTML = "" + " " + round;
    }
  });
});

//function to determine the winner
function playGame() {
  if (computerScore === humanScore) {
    rounds.innerHTML = round + "  " + "game over!";
    winner.textContent = "Draw game";
  } else if (computerScore > humanScore) {
    rounds.innerHTML = round + "  " + "game over!";
    winner.textContent = "Computer win!";
  } else {
    rounds.innerHTML = round + "  " + "game over!";
    winner.textContent = "You win!";
  }
}
// winner.innerHTML = "Round" + " " + round + "<br>" + "Game over" + "<br>";
