//Logic to get computer choice
let choice = ["rock", "paper", "scissors"];
function getComputerChoice(randomChoice) {
  randomChoice = choice[Math.floor(Math.random() * choice.length)];
  console.log(randomChoice);
  return randomChoice;
}
//console.log(getComputerChoice(choice));
//Logic to get human choice
let input = prompt("Play with Rock, Paper or Scissors").toLowerCase();
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
  console.log(humanInput);
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
playRound(getComputerChoice(choice), getHumanChoice(input));

//Logic to play entire game
function playGame() {
  for (i = 0; i < 6; i++) {}
}
playGame();
