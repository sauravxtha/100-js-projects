const calculateBtn = document.querySelector("#calculateBtn");
const calanderInput = document.querySelector("#calanderInput");
calculateBtn.addEventListener("click", () => {
  const differenceMs = Date.now() - Date.parse(calanderInput.value);

  const differenceDate = new Date(differenceMs);
  console.log(differenceDate.getUTCFullYear());
  let difference = differenceDate.getUTCFullYear() - 1970;
  console.log(difference);
  if (!document.querySelector(".content p")) {
    document.querySelector(".content").appendChild(document.createElement("p"));
  }

  if (Date.now() < Date.parse(calanderInput.value)) {
    document.querySelector(".content p").textContent =
      "Please enter a date before today";
  } else if (!calanderInput.value) {
    document.querySelector(".content p").textContent =
      "Please enter a date to calculate";
  } else {
    document.querySelector(".content p").textContent =
      "Your age is " +
      difference +
      (difference > 1 ? " years old" : " year old");
  }
});
