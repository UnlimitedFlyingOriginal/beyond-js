const $window = document.querySelector("#window");
const $buttons = document.querySelector("#button-container");

let num1 = "";
let num2 = "";
let operator = "";
let result = "";

function handleClickButton(event) {
  const className = event.target.className;
  const textContent = event.target.textContent.trim();

  if (className.includes("clear")) {
    handleClickAllClear();
    return;
  }

  if (className.includes("number")) {
    handleClickNumber(textContent);
    return;
  }

  if (className.includes("operator")) {
    handleClickOperator(textContent);
    return;
  }

  if (className.includes("back-space")) {
    handleClickBackSpace(textContent);
    return;
  }
}

function handleClickAllClear() {
  $window.textContent = "0";
  [num1, num2, operator, result] = ["", "", "", ""];
}

function handleClickNumber(textContent) {
  if (!operator) {
    if (!num1 && textContent === "0") {
      return;
    }
  } else {
    if (!num2 && textContent === "0") {
      return;
    }
  }

  if (textContent === ".") {
    if (result) {
      num1 = "0";
      result = "";
    }
    if (!operator) {
      if (num1.includes(".")) {
        return;
      }
      if (!num1) {
        num1 = "0";
      }
    } else {
      if (num2.includes(".")) {
        return;
      }
      if (!num2) {
        num2 = "0";
      }
    }
  }
  if (!operator) {
    if (result) {
      num1 = textContent;
      $window.textContent = num1;
      result = "";
    } else {
      num1 += textContent;
      $window.textContent = num1;
    }
  } else {
    num2 += textContent;
    $window.textContent = num2;
  }
}

function handleClickOperator(textContent) {
  if (textContent === "=") {
    if (operator && num1 && num2) {
      num1 = Number(num1);
      num2 = Number(num2);

      switch (operator) {
        case "%": {
          result = num1 % num2;
          break;
        }
        case "÷": {
          result = num1 / num2;
          break;
        }
        case "×": {
          result = num1 * num2;
          break;
        }
        case "-": {
          result = num1 - num2;
          break;
        }
        case "+": {
          result = num1 + num2;
          break;
        }
      }
      $window.textContent = result;
      num1 = result;
      num2 = "";
      operator = "";
    }
    return;
  }

  if (textContent === "+/-") {
    if (!operator && num1) {
      num1 = -num1;
      $window.textContent = num1;
    } else if (num2) {
      num2 = -num2;
      $window.textContent = num2;
    }
    return;
  }

  if (num1 !== "") {
    operator = textContent;
    return;
  }
}

function handleClickBackSpace(textContent) {
  if (!operator) {
    num1 = num1.slice(0, -1);
    $window.textContent = num1;
  } else {
    num2 = num2.slice(0, -1);
    $window.textContent = num2;
  }
  if (!$window.textContent) {
    $window.textContent = "0";
  }
}

$buttons.addEventListener("click", handleClickButton);
