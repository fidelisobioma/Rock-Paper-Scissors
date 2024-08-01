//Logic to get computer choice
let choice = ["rock", "paper", "scissors"];
function getComputerChoice(randomChoice) {
  return (randomChoice = choice[Math.floor(Math.random() * choice.length)]);
}
console.log(getComputerChoice(choice));

//Logic to get human choice
let input = prompt("Play with Rock, Paper or Scissors");
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
getHumanChoice(input);
