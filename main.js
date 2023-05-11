let form = document.querySelector("form");
let elResult = document.querySelector(".result");
let elInput = document.querySelector(".form__input");
let USD_TO_UZS = document.querySelector(".usd");
let RUBLE_TO_UZS = document.querySelector(".ruble");
let EURO_TO_UZS = document.querySelector(".euro");
let select = document.querySelector("#select");
// let btn = document.querySelector(".btn");

USD_TO_UZS = 11433.05;
RUBLE_TO_UZS = 149.08;
EURO_TO_UZS = 12544.69;
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let inputValue = +elInput.value;
  let selectValue = select.value;

  if (selectValue == "usd") {
    let usdResult = inputValue * USD_TO_UZS;
    elResult.textContent = Math.round(usdResult) + " so'm";
  } else if (selectValue == "ruble") {
    let rubleResult = inputValue * RUBLE_TO_UZS;
    elResult.textContent = Math.round(rubleResult) + " so'm";
  } else if (selectValue == "euro") {
    let euroResult = inputValue * EURO_TO_UZS;
    elResult.textContent = Math.round(euroResult) + " so'm";
  } else {
  }

  console.log(selectValue, inputValue);
});
