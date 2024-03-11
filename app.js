"use strict";

// The Tip Calculator Uses the Following Formulae:
// Total Tip = Bill Amount × (Tip Percentage / 100)
// Total Amount = Bill Amount + Tip Amount
// Tip Per Person = Total Tip / Number of People
// Total Per Person = Total Amount / Number of People

const billInput = document.querySelector(".bill");
const numOfPersonInput = document.querySelector(".num-of-per");
const tipBtn = document.querySelectorAll('input[type="button"]');
const customBtn = document.querySelector(".custom-tip");
const total = document.querySelector(".total");
const tipAmountPerPerson = document.querySelector(".tip-amount-per");
const resetBtn = document.querySelector(".reset");
const peopleInput = document.querySelector(".ppl-input");
const inputError = document.querySelector(".input-error");

const calcTip = function (tip) {
  const bill = +billInput.value;
  const numPersonInput = +numOfPersonInput.value;

  const totalTip = bill * (tip / 100);
  const totalAmount = bill + tip;
  const tipPerPerson = totalTip / numPersonInput;
  const totalPerPerson = totalAmount / numPersonInput;

  total.textContent = `${totalPerPerson.toFixed(2)}`;
  tipAmountPerPerson.textContent = `${tipPerPerson.toFixed(2)}`;
  resetBtn.style.opacity = 1;
};

for (let i = 0; i < tipBtn.length; i++) {
  tipBtn[i].addEventListener("click", () => {
    for (let r = 0; r < tipBtn.length; r++) {
      tipBtn[r].style.backgroundColor = "hsl(183, 100%, 15%)";
    }

    tipBtn[i].style.backgroundColor = "hsl(172, 67%, 45%)";
    const tip = +tipBtn[i].value.slice(0, -1);
    if (numOfPersonInput.value === "0" || numOfPersonInput.value === "") {
      peopleInput.style.border = "1px solid red";
      inputError.textContent = "can't be zero";
    } else if (numOfPersonInput.value > "0") {
      peopleInput.style.border = "none";
      inputError.textContent = "";
      calcTip(tip);
    }
  });
}

const alertUser = function () {
  alert("Please Click Enter btn after inputing tip");
};

customBtn.addEventListener("input", alertUser, { once: true });
window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const userCustomValue = +customBtn.value;
    const tip = userCustomValue;
    calcTip(tip);
  }
});

resetBtn.addEventListener("click", () => {
  total.textContent = `0.00`;
  tipAmountPerPerson.textContent = `0.00`;
  billInput.value = numOfPersonInput.value = customBtn.value = "";
  tipBtn.forEach((btn) => {
    btn.style.backgroundColor = "hsl(183, 100%, 15%)";
  });
  resetBtn.style.opacity = "0.3";
  peopleInput.style.border = "none";
});
