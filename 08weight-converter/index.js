const weightInputEl = document.querySelector("#weightInput");
const weightKgEl = document.querySelector("#weightKg");
weightInputEl.addEventListener("input", () => {
  weightKgEl.textContent = (weightInputEl.value / 2.2046).toFixed(2);
});
