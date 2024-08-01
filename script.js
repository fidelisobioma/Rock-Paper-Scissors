let choice = ["rock", "paper", "scissors"];
function computerChoice(randomChoice) {
  return (randomChoice = choice[Math.floor(Math.random() * choice.length)]);
}
console.log(computerChoice(choice));
