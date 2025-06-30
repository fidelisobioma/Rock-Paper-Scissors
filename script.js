const closeModal = document.querySelector(".close-modal");
const rules = document.querySelector(".rules button");
const overlay = document.querySelector(".overlay");

//add rule modal
rules.addEventListener("click", () => {
  overlay.classList.add("addmodal");
});
closeModal.addEventListener("click", () => {
  overlay.classList.remove("addmodal");
});
//score
let compScore = document.querySelector(".com");
let humanScore = document.querySelector(".you");
let hscore = 0;
let cScore = 0;

let activeYou = document.querySelector("#activeYou");
let activeC = document.querySelector("#activeC");
const showCompchoice = document.querySelector(".computer-choice");
const winner = document.querySelector(".winner");
const showWin = document.querySelector(".win");
const choose = document.querySelector(".choose");
const setPentagon = document.querySelector(".pentagon");
const RPSLS = document.querySelectorAll(".RPSLS img");
const myChoiceImg = document.querySelector(".my-choice img");
const myChoice = document.querySelector(".my-choice div");
const computerC = document.querySelector(".computer-choice div");

RPSLS.forEach((img) => {
  img.addEventListener("click", (event) => {
    //logic to handle human choice
    const rpsls = event.target.src;
    myChoiceImg.src = rpsls;
    myChoiceImg.alt = event.target.alt;
    //add color
    // const itemColor = img.parentElement.parentElement;
    const item = img.parentElement.parentElement.id;
    switch (item) {
      case "scissors":
        myChoice.style.border = "10px solid hsl(39, 89%, 49%)";
        break;
      case "paper":
        myChoice.style.border = "10px solid hsl(230, 89%, 62%)";
        break;
      case "rock":
        myChoice.style.border = "10px solid hsl(349, 71%, 52%)";
        break;
      case "lizard":
        myChoice.style.border = "10px solid hsl(261, 73%, 60%)";
        break;
      default:
        myChoice.style.border = "10px solid hsl(189, 59%, 53%)";
    }
    //logic to handle computer choice
    const computerChoice = document.querySelector(".computer-choice img");
    const pentagon = document.querySelectorAll("#img");
    const items = ["rock", "paper", "scissors", "lizard", "spock"];
    const randomChoice = items[Math.floor(Math.random() * items.length)];
    const arry = [];
    pentagon.forEach((child) => {
      arry.push(child);
    });
    const x = arry.find((child) => child.alt == randomChoice);
    computerChoice.src = x.src;
    computerChoice.alt = x.alt;
    //set color
    switch (randomChoice) {
      case "scissors":
        computerC.style.border = "10px solid hsl(39, 89%, 49%)";
        break;
      case "paper":
        computerC.style.border = "10px solid hsl(230, 89%, 62%)";
        break;
      case "rock":
        computerC.style.border = "10px solid hsl(349, 71%, 52%)";
        break;
      case "lizard":
        computerC.style.border = "10px solid hsl(261, 73%, 60%)";
        break;
      default:
        computerC.style.border = "10px solid hsl(189, 59%, 53%)";
    }

    setTimeout(() => {
      showCompchoice.classList.add("display");
    }, 1000);
    //show win

    setTimeout(() => {
      showWin.classList.add("showwin");
    }, 2000);
    //show choose
    choose.classList.add("showchoose");
    //hide setPentagon
    setPentagon.classList.add("hidepentagon");
    choose.classList.add("showchoose");
    //logic to determin winner
    let human = event.target.alt;
    let computer = randomChoice;
    if (
      (human === "scissors" && computer === "paper") ||
      (human === "scissors" && computer === "lizard") ||
      (human === "rock" && computer === "scissors") ||
      (human === "rock" && computer === "lizard") ||
      (human === "paper" && computer === "rock") ||
      (human === "paper" && computer === "spock") ||
      (human === "lizard" && computer === "paper") ||
      (human === "lizard" && computer === "spock") ||
      (human === "spock" && computer === "rock") ||
      (human === "spock" && computer === "scissors")
    ) {
      setTimeout(() => {
        humanScore.textContent = hscore += 1;
        myChoice.classList.add("gradient");
      }, 2000);
      winner.textContent = "YOU WIN!";
      computerC.classList.remove("gradient");
      // console.log(computerC);
    } else if (
      (computer === "scissors" && human === "paper") ||
      (computer === "scissors" && human === "lizard") ||
      (computer === "rock" && human === "scissors") ||
      (computer === "rock" && human === "lizard") ||
      (computer === "paper" && human === "rock") ||
      (computer === "paper" && human === "spock") ||
      (computer === "lizard" && human === "paper") ||
      (computer === "lizard" && human === "spock") ||
      (computer === "spock" && human === "rock") ||
      (computer === "spock" && human === "scissors")
    ) {
      setTimeout(() => {
        compScore.textContent = cScore += 1;
        computerC.classList.add("gradient");
      }, 2000);
      winner.textContent = "YOU LOOSE!";
      myChoice.classList.remove("gradient");
    } else {
      winner.textContent = "TIE!";
      myChoice.classList.remove("gradient");
      computerC.classList.remove("gradient");
    }
  });
});
//play again
const play = document.querySelector(".play");
play.addEventListener("click", () => {
  setPentagon.classList.remove("hidepentagon");
  choose.classList.remove("showchoose");
  showWin.classList.remove("showwin");
  showCompchoice.classList.remove("display");
});
