const timer = document.querySelector("#timer");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const lapBtn = document.querySelector("#lap");
const resetBtn = document.querySelector("#reset");

let startTime = 0;
let elapsedTime = 0;
let timerId;
let lap = 0;

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
lapBtn.addEventListener("click", lapTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {
  startBtn.disabled = true;
  let newDate = new Date();
  startTime = newDate.getTime() - elapsedTime;

  timerId = setInterval(() => {
    newDate = new Date();
    elapsedTime = newDate.getTime() - startTime;
    timer.innerHTML = formatTime(elapsedTime);
  }, 10);
}

function stopTimer() {
  startBtn.disabled = false;
  clearInterval(timerId);
}

function formatTime(time) {
  let miliSeconds = Math.floor((time % 1000) / 10);
  let seconds = Math.floor((time / 1000) % 60);
  let minutes = Math.floor((time / (1000 * 60)) % 60);
  let hours = Math.floor(time / (1000 * 60 * 60));

  return (
    (hours > 9 ? hours : "0" + hours) +
    ":" +
    (minutes > 9 ? minutes : "0" + minutes) +
    ":" +
    (seconds > 9 ? seconds : "0" + seconds) +
    "." +
    (miliSeconds > 9 ? miliSeconds : "0" + miliSeconds)
  );
}

function resetTimer() {
  startBtn.disabled = false;
  clearInterval(timerId);
  startTime = 0;
  elapsedTime = 0;
  lap = 0;
  timer.innerHTML = "00:00:00";
  const allLaps = document.querySelectorAll(".timer");
  allLaps.forEach((lap) => {
    lap.remove();
  });
}

function lapTimer() {
  lap += 1;
  const laphtml = document.createElement("div");
  laphtml.setAttribute("class", "timer");
  laphtml.innerHTML = "Lap " + lap + " = " + formatTime(elapsedTime);
  document.getElementById("allTimers").appendChild(laphtml);
}
