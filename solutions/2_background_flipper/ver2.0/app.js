const $background = document.querySelector('.background');
const $buttonContainer = document.querySelector('.button-container');

const colors = ['tomato', 'dodgerblue', 'hotpink', 'yellowgreen', 'chocolate'];

function reset() {
  colors.forEach(color => {
    const $target = document.querySelector(`.${color}`);
    $target.style.backgroundColor = color;
    $target.style.color = 'white';
  });
  $background.style.backgroundColor = 'white';
}

function renderBackground(color) {
  $background.style.backgroundColor = color;
}

function renderButton(color) {
  const $target = document.querySelector(`.${color}`);
  $target.style.backgroundColor = 'white';
  $target.style.color = color;
}

function setState(clickedButton) {
  const state = clickedButton;
  render(state);
}

function render(state) {
  reset();
  if (state) {
    renderBackground(state);
    renderButton(state);
  }
}

function handleClickButton(e) {
  const target = e.target;
  if (target.tagName === 'BUTTON') {
    const clickedButton = target.className; // 예외) 리셋 버튼을 클릭하는 경우 : className === ''
    setState(clickedButton);
  }
}

function init() {
  $buttonContainer.addEventListener('click', handleClickButton);
}

init();
