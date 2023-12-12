const billAmmount = document.querySelector("#billAmmount");
const tipPercentage = document.querySelector("#tipPercentage");
const total = document.querySelector("#total");
const calculateBtn = document.querySelector("#calculateBtn");

calculateBtn.addEventListener("click", () => {
  let tipAmmount = (tipPercentage.value / 100) * billAmmount.value;
  let totalAmmount = Number(billAmmount.value) + Number(tipAmmount);
  total.innerHTML = "$" + totalAmmount.toFixed(2);
});
