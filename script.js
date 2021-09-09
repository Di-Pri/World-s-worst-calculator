"use strict";
window.addEventListener("DOMContentLoaded", start);

const firstNumber = document.querySelector("#firstnumber");
const secondNumber = document.querySelector("#secondnumber");
const results = document.querySelector("#results");
const doround = document.querySelector("#doround");
let decimals = document.querySelector("#decimals");

function start() {
  document.querySelector("button").addEventListener("click", calculate);
  document.querySelector("#clear").addEventListener("click", clearResults);
}

function calculate() {
  const firstValue = Number(firstNumber.value);
  const secondValue = Number(secondNumber.value);
  const operator = document.querySelector("#operator").value;
  let calcNumber;

  if (operator === "add") {
    calcNumber = firstValue + secondValue;
  } else if (operator === "sub") {
    calcNumber = firstValue - secondValue;
  } else if (operator === "mul") {
    calcNumber = firstValue * secondValue;
  } else {
    calcNumber = firstValue / secondValue;
  }

  if (doround.checked === true) {
    calcNumber = calcNumber.toFixed(decimals.value);
  }

  console.log(calcNumber);

  // firstnumber.value = calcNumber; - named element, don't use
  firstNumber.value = calcNumber;

  let list = document.createElement("li");
  list.textContent = calcNumber;
  results.appendChild(list);

  results.scrollTop = results.scrollHeight;
}

function clearResults() {
  results.innerHTML = "";
  firstNumber.value = "";
  secondNumber.value = "";
  doround.checked = false;
  decimals.value = "0";
}
