const buttonEl = document.querySelectorAll("button");

const resultEl = document.querySelector("#result");
const computerScoreEl = document.querySelector("#computerScore");
const userScoreEl = document.querySelector("#userScore");

let playerScore = 0;
let computerScore = 0;

buttonEl.forEach((button) => {
  button.addEventListener("click", () => {
    const playerSelection = button.id;
    const computerSelection = computerSelect();
    const result = playGame(playerSelection, computerSelection);
    resultEl.textContent = result;
    computerScoreEl.textContent = computerScore;
    userScoreEl.textContent = playerScore;
  });
});

const computerSelect = () => {
  const selections = ["rock", "paper", "scizor"];
  return selections[Math.floor(Math.random() * selections.length)];
};

const playGame = (player, computer) => {
  switch (player) {
    case "rock":
      if (player == computer) {
        return `You choose ${player}. Computer choose ${computer}. It's a draw!!!`;
      } else if (computer == "scizor") {
        playerScore++;
        return `You choose ${player}. Computer choose ${computer}. You win!!!`;
      } else {
        computerScore++;
        return `You choose ${player}. Computer choose ${computer}. Computer wins!!!`;
      }
      break;
    case "paper":
      if (player == computer) {
        return `You choose ${player}. Computer choose ${computer}. It's a draw!!!`;
      } else if (computer == "rock") {
        playerScore++;
        return `You choose ${player}. Computer choose ${computer}. You win!!!`;
      } else {
        computerScore++;
        return `You choose ${player}. Computer choose ${computer}. Computer wins!!!`;
      }
      break;
    case "scizor":
      if (player == computer) {
        return `You choose ${player}. Computer choose ${computer}. It's a draw!!!`;
      } else if (computer == "paper") {
        playerScore++;
        return `You choose ${player}. Computer choose ${computer}. You win!!!`;
      } else {
        computerScore++;
        return `You choose ${player}. Computer choose ${computer}. Computer wins!!!`;
      }
      break;
  }
};
