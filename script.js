const numbersBtn = document.querySelectorAll(".numbers"),
  operatorsBtn = document.querySelectorAll(".operators"),
  resultBtn = document.querySelectorAll(".result"),
  clearBtn = document.querySelectorAll(".clear"),
  decimalBtn = document.querySelector(".decimal");

let display = document.querySelector(".display");
(memoyCurrentNumber = 0),
  (memoryPendingOperation = ""),
  (memoryNewNumber = false);

function numberPress(number) {
  if (memoryNewNumber) {
    display.value = number;
    memoryNewNumber = false;
  } else {
    if (display.value === "0") {
      display.value = number;
    } else {
      display.value += number;
    }
  }
}

numbersBtn.forEach((number) => {
  number.addEventListener("click", (event) => {
    numberPress(event.target.textContent);
  });
});

function operations(op) {
  let memoryLocalOperation = display.value;
  if (memoryNewNumber && memoryPendingOperation !== "=") {
    display.value = memoryCurrentNumber;
  } else {
    memoryNewNumber = true;
    if (memoryPendingOperation === "+") {
      memoryCurrentNumber += +memoryLocalOperation;
    } else if (memoryPendingOperation === "-") {
      memoryCurrentNumber -= +memoryLocalOperation;
    } else if (memoryPendingOperation === "*") {
      memoryCurrentNumber *= +memoryLocalOperation;
    } else if (memoryPendingOperation === "/") {
      memoryCurrentNumber /= +memoryLocalOperation;
    } else {
      memoryCurrentNumber = +memoryLocalOperation;
    }
    display.value = memoryCurrentNumber;
    memoryPendingOperation = op;
  }
}

operatorsBtn.forEach((symbol) => {
  symbol.addEventListener("click", (event) => {
    operations(event.target.textContent);
  });
});

function clear(id) {
  if (id == "C") {
    (display.value = "0"),
      (memoryNewNumber = true),
      (memoryCurrentNumber = "0"),
      (memoryPendingOperation = "0");
  } else if (id === "CE") {
    (display.value = "0"), (memoryNewNumber = true);
  }
}

clearBtn.forEach((id) => {
  id.addEventListener("click", (event) => {
    clear(event.target.textContent);
  });
});

function decimal() {
  let localDecimalMemory = display.value;
  if (memoryNewNumber) {
    localDecimalMemory = "0.";
    memoryNewNumber = false;
  } else {
    if (localDecimalMemory.indexOf(".") === -1) {
      localDecimalMemory += ".";
    }
  }
  display.value = localDecimalMemory;
}

decimalBtn.addEventListener("click", decimal);
