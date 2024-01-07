const buttonEl = document.querySelectorAll(".button");
const contentEl = document.querySelectorAll(".content");
const tabsEl = document.querySelector(".tabs");

tabsEl.addEventListener("click", (e) => {
  tabId = e.target.dataset.id;
  if (tabId) {
    buttonEl.forEach((button) => {
      button.classList.remove("live");
    });
    e.target.classList.add("live");
    contentEl.forEach((content) => {
      content.classList.remove("live");
    });
    const selectedContentEl = document.getElementById(tabId);
    selectedContentEl.classList.add("live");
  }
});
