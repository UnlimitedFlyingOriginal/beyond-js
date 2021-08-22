const $order = document.querySelector("#order");
const $word = document.querySelector("#word");
const $input = document.querySelector("#inputText");

let number;
let word;
let nextWord;

const onClickInput = (event) => {
  if ($input.value.length === 3) {
    if (!word) {
      word = $input.value;
      $word.textContent = $input.value;
      $input.value = "";
      return;
    }

    nextWord = $input.value;
    if (word[word.length - 1] === nextWord[0]) {
      word = nextWord;
      $word.textContent = nextWord;
      $input.value = "";

      if (Number($order.textContent) + 1 > number) {
        $order.textContent = 1;
      } else {
        $order.textContent = Number($order.textContent) + 1;
      }
    } else {
      alert("올바르지 않은 단어입니다.");
    }
  } else {
    alert("3글자 단어를 입력해주세요.");
  }
};

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
