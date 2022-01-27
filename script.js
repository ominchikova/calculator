const numbersBtn = document.querySelectorAll(".numbers"),
  operatorsBtn = document.querySelectorAll(".operators"),
  resultBtn = document.querySelectorAll(".result"),
  clearBtn = document.querySelectorAll(".clear"),
  clearAllBtn = document.querySelectorAll(".Allclear"),
  decimalBtn = document.querySelectorAll(".decimal");

let display = document.querySelector(".display");

console.log(display);

function numberPress(number) {
  if (display.value === '0') {
    display.value = number;
  } else {
    display.value += number;
  }
};


numbersBtn.forEach((number) => {
  number.addEventListener("click",(event) => {
    numberPress(event.target.textContent);
  });
});
