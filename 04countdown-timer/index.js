const startBtn = document.querySelector("#startBtn");
const timerInput = document.querySelector("#timerInput");
const timerLable = document.querySelector(".content label");
const pauseButton = document.createElement("button");
const resetButton = document.createElement("button");
const timerContent = document.createElement("div");
timerContent.setAttribute("id", "timerContnet");
pauseButton.setAttribute("id", "pauseButton");
resetButton.setAttribute("id", "resetButton");
pauseButton.textContent = "Pause";
resetButton.textContent = "Reset";
let countdownTimerId;
let timeLeft = 0;
pauseButton.addEventListener("click", () => {
  clearInterval(countdownTimerId);
  startBtn.disabled = false;
  pauseButton.disabled = true;
});

resetButton.addEventListener("click", () => {
  console.log(timerLable);
  clearInterval(countdownTimerId);
  startBtn.disabled = false;
  pauseButton.disabled = false;
  timeLeft = 0;
  if (document.querySelector("#timerContnet")) {
    document.querySelector("#timerContnet").remove();
  }
  if (document.querySelector("#pauseButton")) {
    document.querySelector("#pauseButton").remove();
  }
  if (document.querySelector("#resetButton")) {
    document.querySelector("#resetButton").remove();
  }
  document.querySelector("#timer").appendChild(timerLable);
  document.querySelector("#timer").appendChild(timerInput);
});

startBtn.addEventListener("click", () => {
  if (timeLeft == 0) {
    timeLeft = timerInput.value * 60;
  }
  if (timeLeft !== 0) {
    timerContent.textContent = new Date(timeLeft * 1000)
      .toISOString()
      .slice(11, 19);

    countdownTimerId = setInterval(() => {
      timeLeft = timeLeft - 1;
      timerContent.textContent = new Date(timeLeft * 1000)
        .toISOString()
        .slice(11, 19);
      if (timeLeft == 0) {
        clearInterval(countdownTimerId);
      }
    }, 1000);

    if (document.querySelector(".content p")) {
      document.querySelector(".content p").remove();
    }
    timerInput.remove();
    timerLable.remove();
    document.querySelector("#buttons").appendChild(pauseButton);
    document.querySelector("#buttons").appendChild(resetButton);
    document.querySelector("#timer").appendChild(timerContent);
    startBtn.disabled = true;
    pauseButton.disabled = false;
  } else {
    const enterValue = document.createElement("p");
    enterValue.textContent = "Please enter time to start countdown";
    if (!document.querySelector(".content p")) {
      document.querySelector(".content").appendChild(enterValue);
    }
  }
});
