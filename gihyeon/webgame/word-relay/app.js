function init() {
  let number;

  while (!number) {
    const start = prompt("몇 명이 참가하나요?");
    // console.log("start=", start, isNaN(start));
    // console.log(Number(start), parseInt(start));
    // console.log("공백=", "", isNaN(""));
    // console.log(Number(""));
    // console.log(typeof start, typeof "");
    //prompt 미입력 -> 확인버튼 클릭 결과
    //값=공백?, Number->0, parseInt->NaN, isNaN->false, typeof->string

    if (start === null) {
      //취소
      alert("게임을 종료합니다.");
      return; //함수를 빠져나감
    } else if (Number(start) === 0 || isNaN(Number(start))) {
      //0또는 문자열 입력
      alert("1이상의 숫자를 입력해주세요.");
    } else {
      //숫자 입력
      alert("게임시작!");
      number = parseInt(start);
      // break; //반복문을 빠져나감
    }
  }

  // console.log("number=", number);
  // let startButton = document.getElementById("start");
  const $order = document.querySelector("#order");
  const $word = document.querySelector("#word");
  // console.log($order, $word);
  const $input = document.querySelector("#inputText");

  let word;
  let nextWord;

  //입력 버튼 클릭
  const onClickInput = (event) => {
    if (!word) {
      word = $input.value;
      $word.textContent = $input.value;
      $input.value = "";
      Number($order.textContent) += 1;
      return;
    }

    nextWord = $input.value;
    if(word[word.length-1] === nextWord[0]){
      word = nextWord;
      $word.textContent = nextWord;
      $input.value = "";
      Number($order.textContent) += 1;
    } else {
      alert("다른 단어를 입력해주세요!");
    }
  };

  //이벤트
  document.querySelector("#inputButton").addEventListener("click", onClickInput);
}

init();
// document.querySelector("#start").addEventListener("click", start);

// const number = Number(prompt("몇 명이 참가하나요?"));
// const $button = document.querySelector("button");
// const $input = document.querySelector("input");
// const $word = document.querySelector("#word");
// const $order = document.querySelector("#order");
// let word; // 제시어
// let newWord; // 현재 단어
// const onClickButton = () => {
//   if (!word || word[word.length - 1] === newWord[0]) {
//     // 제시어가 비어 있거나 올바른 단어인가?
//     word = newWord; // 입력한 단어가 제시어가 된다.
//     $word.textContent = word; // 화면에 제시어 표시
//     const order = Number($order.textContent);
//     if (order + 1 > number) {
//       $order.textContent = 1;
//     } else {
//       $order.textContent = order + 1;
//     }
//   } else {
//     // 올바르지 않다.
//     alert("올바르지 않은 단어입니다!");
//   }
//   $input.value = "";
//   $input.focus();
// };

// const onInput = (event) => {
//   newWord = event.target.value; // 입력한 단어를 현재 단어로
// };

// $button.addEventListener("click", onClickButton);
// $input.addEventListener("input", onInput);
