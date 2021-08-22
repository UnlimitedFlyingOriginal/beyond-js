const $result = document.querySelector('.result');
const $plus = document.querySelector('button:first-child');
const $reset = document.querySelector('button:nth-child(2)');
const $minus = document.querySelector('button:last-child');

/*
✅ DOM 검색 메서드
1. (개인적인) 추천 😎
querySelector()
querySelectorAll()
2.
getElementById()
getElementsByClassName()
getElementsByTagName()
*/

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
