const $buttons = document.querySelector('.buttons');
const $screen = document.querySelector('.screen');

let result = 0;
let expression = ['0'];

function calculate() {
  const [first, type, second] = expression;

  switch (type) {
    case '+': {
      return Number(first) + Number(second);
    }
    case '-': {
      return Number(first) - Number(second);
    }
    case '×': {
      return Number(first) * Number(second);
    }
    case '÷': {
      return Number((Number(first) / Number(second)).toFixed(2));
    }
    default: {
      return;
    }
  }
}

function renderScreen() {
  $screen.textContent = expression.join('');
}

function handleClickButtons(e) {
  const { className, textContent } = e.target;

  if (className.includes('number')) {
    if (expression[0] === '0') {
      expression.pop();
      expression.push(textContent);
    } else if (expression.length === 1 || expression.length === 3) {
      let prev = expression.pop();
      prev += textContent;
      expression.push(prev);
    } else {
      expression.push(textContent);
    }
  } else if (className.includes('operator')) {
    expression.push(textContent);
  } else if (className.includes('equal')) {
    if (expression.length === 3) {
      const result = calculate();
      expression = [result];
    }
  } else if (className.includes('clear')) {
    expression = ['0'];
  }

  renderScreen();
}

function init() {
  $buttons.addEventListener('click', handleClickButtons);
  renderScreen();
}

init();
