//## 랜덤 숫자 만드는 함수 만들기
function getRandomNumber(num1, num2) {
  const min = Math.ceil(num1 + 1);
  const max = Math.floor(num2);
  return Math.floor(Math.random() * (max - min) + min);
}

{
  alert(
    "두 숫자를 입력해주세요.\n(첫번째 숫자는 두번째 숫자보다 작아야합니다.)"
  );
  let num1;
  let flag1 = false;
  let message1 = "첫번째 숫자를 입력해주세요.";
  while (!flag1) {
    num1 = prompt(message1);
    if (num1 !== "" && !isNaN(num1)) {
      num1 = Number(num1);
      break;
    }
    message1 = "첫번째 숫자를 입력해주세요.\n(숫자를 입력해주세요.)";
  }
  let num2;
  let flag2 = false;
  let message2 = "두번째 숫자를 입력해주세요.";
  while (!flag2) {
    num2 = Number(prompt(message2));
    if (num1 !== "" && !isNaN(num1) && num1 < num2) {
      num2 = Number(num2);
      break;
    }
    message2 =
      "두번째 숫자를 입력해주세요.\n(첫번째 숫자보다 큰 숫자를 입력해주세요.)";
  }
  console.log(getRandomNumber(num1, num2));
}

//## 확장자 구별 함수 만들기
