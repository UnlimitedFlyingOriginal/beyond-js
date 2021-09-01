const $background = document.querySelector('.background');
const $buttonContainer = document.querySelector('.button-container');
const $reset = document.querySelector('.reset');

const COLOR = {
  WHITE: 'white',
  BLACK: 'black',
};

let previousClickedButton = '';

function changeBackground(color) {
  $background.style.backgroundColor = color;
}

function changeButtonStyle(target, color) {
  target.style.backgroundColor = COLOR.WHITE;
  target.style.color = color;
}

function resetButtonStyle(previous) {
  if (previous) {
    const $previous = document.querySelector(`.${previous}`);
    $previous.style.backgroundColor = previous;
    $previous.style.color = COLOR.WHITE;
  }
}

function handleClickButton(e) {
  const target = e.target;
  if (target.tagName === 'BUTTON') {
    const color = target.textContent;
    changeBackground(color);
    changeButtonStyle(target, color, previousClickedButton);
    resetButtonStyle(previousClickedButton);
    previousClickedButton = target.className;
  }
}

function handleClickReset() {
  $background.style.background = COLOR.WHITE;
  resetButtonStyle(previousClickedButton);
}

function init() {
  $buttonContainer.addEventListener('click', handleClickButton);
  $reset.addEventListener('click', handleClickReset);
}

init();
