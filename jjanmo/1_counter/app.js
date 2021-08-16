const $result = document.querySelector('.result');
const $plus = document.querySelector('button:first-child');
const $reset = document.querySelector('button:nth-child(2)');
const $minus = document.querySelector('button:last-child');

function handleClickPlus() {
  const count = Number($result.textContent);
  $result.textContent = count + 1;
}

function handleClickMinus() {
  const count = Number($result.textContent);
  $result.textContent = count - 1;
}

function handleClickReset() {
  $result.textContent = 0;
}

function init() {
  $plus.addEventListener('click', handleClickPlus);
  $minus.addEventListener('click', handleClickMinus);
  $reset.addEventListener('click', handleClickReset);
}

init();
