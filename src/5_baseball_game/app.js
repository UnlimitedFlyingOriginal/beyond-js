const $window = document.querySelector(".window");
const $input = document.querySelector(".input");
const $button = document.querySelector(".button");
$button.addEventListener("click", handleClickbutton);

let numArray = [];
let inputValue;

while (numArray.length < 3) {
  let num = Math.floor(Math.random() * (10 - 1) + 1);
  if (!numArray.includes(num)) {
    numArray.push(num);
  }
}
console.log(numArray);

function handleClickbutton() {
  inputValue = $input.value;
  let result = checkNumber(inputValue);
  $window.textContent = result;
}

function checkNumber(inputValue) {
  let resultArray = [];
  const inputArray = inputValue.split("");

  for (let i = 0; i < 3; i++) {
    if (numArray.includes(Number(inputArray[i]))) {
      if (i === numArray.indexOf(Number(inputArray[i]))) {
        resultArray.push("S");
      } else {
        resultArray.push("B");
      }
    } else {
      resultArray.push("O");
    }
  }

  return resultArray;
}
