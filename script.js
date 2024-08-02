//Logic to get computer choice
let choice = ["rock", "paper", "scissors"];
function getComputerChoice(randomChoice) {
  randomChoice = choice[Math.floor(Math.random() * choice.length)];
  console.log("Computer:" + " " + randomChoice);
  return randomChoice;
}
//console.log(getComputerChoice(choice));
//Logic to get human choice

function getHumanChoice(humanInput) {
  if (
    humanInput !== "rock" &&
    humanInput !== "paper" &&
    humanInput !== "scissors"
  ) {
    console.log("Play with rock, paper or scissors");
  } else if (humanInput === "") {
    console.log("Play with rock, paper or scissors");
  }
  console.log("Human:" + " " + humanInput);
  return humanInput;
}
//getHumanChoice(input);

//Variables to keep track of players score
let computerScore = 0;
let humanScore = 0;

//logic to play single round
function playRound(computerChoice, humanChoice) {
  if (humanChoice === computerChoice) {
    console.log("Draw");
  } else if (
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    console.log("Computer score:" + " " + (computerScore += 1));
    return computerScore;
  } else if (
    humanChoice !== "rock" &&
    humanChoice !== "paper" &&
    humanChoice !== "scissors"
  ) {
    console.log("");
  } else {
    console.log("Human score:" + " " + (humanScore += 1));
    return humanScore;
  }
}

//Logic to play entire game
function playGame() {
  for (i = 0; i < 6; i++) {
    let input = prompt("Play with Rock, Paper or Scissors").toLowerCase();
    playRound(getComputerChoice(choice), getHumanChoice(input));
  }
  //Logic to determine the Winner
  if (computerScore === humanScore) {
    console.log("Both team draw!");
  } else if (computerScore > humanScore) {
    console.log("Computer Win!");
  } else {
    console.log("Human win!");
  }
}
playGame();
