/*
3장 셀프체크 주제는 끝말잇기 게임을 응용해 쿵쿵따 게임 만들기입니다.
그저 입력할 수 있는 단어를 세 글자로 고정하면 됩니다.
다만, 세 글자가 아니라면 다시 입력하라고 표시하세요.
또한, 초반에 prompt 함수를 사용해 몇 명이 참가할지를 선택할 때
사용자가 취소를 누르면 다음 코드가 실행되지 않게 처리하면 좋을 것 같습니다.
힌트 : 사용자가 input 이벤트를 발생시킬 때 입력한 글자가 세 글자인지 확인합니다.
*/

const number = Number(prompt("몇명이 참가하나요?"));
console.log(typeof number, number);

// const $input = document.querySelector("input");
// console.log($input);
