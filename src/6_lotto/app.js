const $input = document.querySelectorAll("input");
const $button = document.querySelector("button");
const $result = document.querySelector("#result");

//테스트용
// const lottoArray = getLottoNumber();
// console.log(lottoArray);

function handleClickButton() {
  const inputArray = getInputNumber();
  const lottoArray = getLottoNumber();
  const result = checkLottoNumber(inputArray, lottoArray);
  $result.textContent = result;
}

function getInputNumber() {
  let inputArray = [];
  $input.forEach((input) => {
    inputArray.push(input.value);
  });
  return inputArray;
}

function getLottoNumber() {
  const min = 1;
  const max = 45;
  let lottoArray = [];
  for (let i = 0; i < 7; i++) {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * (max + 1 - min) + 1);
    } while (lottoArray.includes(randomNumber));
    lottoArray.push(randomNumber);
  }
  return lottoArray;
}

function checkLottoNumber(inputArray, lottoArray) {
  const bonusNumber = String(lottoArray.pop());
  let resultArray = [];
  let result;

  lottoArray.forEach((lottoNumber) => {
    if (inputArray.includes(String(lottoNumber))) {
      resultArray.push(lottoNumber);
    }
  });

  if (resultArray.length < 3) {
    return (result = "다음 기회에");
  }
  if (resultArray.length === 3) {
    return (result = "5등");
  }
  if (resultArray.length === 4) {
    return (result = "4등");
  }
  if (resultArray.length === 5) {
    if (inputArray.includes(bonusNumber)) {
      return (result = "2등");
    }
    return (result = "3등");
  }
  if (resultArray.length === 6) {
    return (result = "1등");
  }
}

$button.addEventListener("click", handleClickButton);
