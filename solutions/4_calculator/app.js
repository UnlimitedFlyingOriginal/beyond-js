const $buttons = document.querySelector('.buttons');
const $screen = document.querySelector('.screen');

let number1 = 0; // 첫번째 숫자
let number2 = 0; // 두번째 숫자
let type = ''; // 연산자
let result = 0; // 계산결과 값
let text = '0'; // 스크린에 찍히는 문자열

function calculate(type, number1, number2) {
  console.log(type, typeof number1);
  switch (type) {
    case '+': {
      result = number1 + number2;
      console.log(result);
      number1 = result;
      return result;
    }
    case '-': {
      result = number1 - number2;
      number1 = result;
      return result;
    }
    case '×': {
      result = number1 * number2;
      number1 = result;
      return result;
    }
    case '÷': {
      result = Number((number1 / number2).toFixed(4));
      number1 = result;
      return result;
    }
    default: {
    }
  }
}

function checkNumber(number) {
  if (String(number).length > 4) alert('숫자는 네 자리까지만 입력 가능합니다!');
}

function renderScreen() {
  $screen.textContent = text;
}

function handleClickButtons(e) {
  const { className, textContent } = e.target;

  if (className.includes('zero')) {
    if (text !== '0') text += textContent;
  } else if (className.includes('number')) {
    if (text === '0') {
      number1 = Number(textContent);
      text = textContent;
    } else {
      text += textContent;
      if (number2 === 0) {
        checkNumber(number1);
        number1 = Number(number1 + textContent);
      } else {
        checkNumber(number2);
        number2 = Number(number2 + textContent);
      }
    }
  } else if (className.includes('operator')) {
    text += textContent;
    type = textContent;
    number = 0;
  } else if (className.includes('clear')) {
    text = '0';
  } else if (className.includes('dot')) {
  } else if (className.includes('equal')) {
    const result = calculate(type, number1, number2);
    console.log(result);
    text = result;
  }

  renderScreen();
}

function init() {
  $buttons.addEventListener('click', handleClickButtons);
  renderScreen();
}

init();
