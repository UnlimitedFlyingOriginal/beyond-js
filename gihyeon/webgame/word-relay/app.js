const $order = document.querySelector("#order");
const $word = document.querySelector("#word");
const $input = document.querySelector("#inputText");

let number;
let word;
let nextWord;

function init() {
  while (!number) {
    const start = prompt("몇 명이 참가하나요?");
    //prompt 미입력 -> 확인버튼 클릭 결과
    //값=공백, Number->0, parseInt->NaN, isNaN->false, typeof->string

    if (start === null) {
      alert("게임을 종료합니다.");
      return;
    } else if (Number(start) === 0 || isNaN(Number(start))) {
      alert("1이상의 숫자를 입력해주세요.");
    } else {
      alert("게임을 시작합니다.");
      number = parseInt(start);
    }
  }

  document
    .querySelector("#inputButton")
    .addEventListener("click", onClickInput);
}

init();
