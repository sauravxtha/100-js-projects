const playBtnEl = document.querySelector("#playBtn");
const closeBtnEl = document.querySelector("#closeBtn");
const popUpEl = document.querySelector(".popUp");

playBtnEl.addEventListener("click", () => {
  popUpEl.classList.remove("active");
});
closeBtnEl.addEventListener("click", () => {
  popUpEl.classList.add("active");
});
