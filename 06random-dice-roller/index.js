let dice = ["&#9856", "&#9857", "&#9858", "&#9859", "&#9860", "&#9861"];

const diceEl = document.querySelector("#dice");
const buttonEl = document.querySelector("#rollDice");
const rollHistoryEl = document.querySelector("#rollHistory");
const rollLiEl = document.createElement("li");

let rollInterval;
let randomDice;

buttonEl.addEventListener("click", () => {
  buttonEl.disabled = true;
  rollInterval = setInterval(() => {
    randomDice = Math.floor(Math.random() * 6);
    diceEl.innerHTML = dice[randomDice];
  }, 100);

  setTimeout(() => {
    console.log(randomDice);
    clearInterval(rollInterval);
    rollLiEl.textContent = "You Rolled: " + (randomDice + 1);
    rollHistoryEl.appendChild(rollLiEl);
    buttonEl.disabled = false;
  }, 1500);
});
