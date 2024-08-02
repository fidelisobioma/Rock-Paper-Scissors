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
function playRound(computerChoice, humanChoice) {}
playRound(getComputerChoice(choice), getHumanChoice(input));
