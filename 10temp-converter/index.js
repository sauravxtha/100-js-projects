const celsiusInputEl = document.querySelector("#tempCelsius");
const farenInputEl = document.querySelector("#tempFahrenheit");
const kelvinInputEl = document.querySelector("#tempKelvin");

celsiusInputEl.addEventListener("input", () => {
  farenInputEl.value = (celsiusInputEl.value * 1.8 + 32).toFixed(2);
  kelvinInputEl.value = (celsiusInputEl.value * 1 + 273.32).toFixed(2);
});
farenInputEl.addEventListener("input", () => {
  celsiusInputEl.value = ((farenInputEl.value * 1 - 32) / 1.8).toFixed(2);
  kelvinInputEl.value = ((farenInputEl.value * 1 - 32) / 1.8 + 273.32).toFixed(
    2
  );
});
kelvinInputEl.addEventListener("input", () => {
  celsiusInputEl.value = (kelvinInputEl.value * 1 - 273.32).toFixed(2);
  farenInputEl.value = (kelvinInputEl.value * 1 - 273.15 * 1.8 + 32).toFixed(2);
});
