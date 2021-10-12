//6개의 숫자를 입력
//로또 랜덤 숫자를 6개 + 보너스 숫자 1개 생성
//1등 6개 일치
//2등 5개 일치 보너스 숫자 일치
//3등 5개 일치
//4등 4개 일치
//5등 3개 일치
const $input = document.querySelectorAll("input");
const $button = document.querySelector("button");

function handleClickButton() {
  let array = [];
  $input.forEach((input) => {
    array.push(input.value);
  });
  console.log(array);
}

$button.addEventListener("click", handleClickButton);
