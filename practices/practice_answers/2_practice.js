//## 랜덤 숫자 만드는 함수 만들기
function getRandomNumber(num1, num2) {
  min = Math.ceil(num1 + 0.1);
  max = Math.floor(num2);
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
    num1 = Number(prompt(message1));
    flag1 = !isNaN(num1) ? true : false;
    message1 = "첫번째 숫자를 입력해주세요.\n(숫자를 입력해주세요.)";
  }
  let num2;
  let flag2 = false;
  let message2 = "두번째 숫자를 입력해주세요.";
  while (!flag2) {
    num2 = Number(prompt(message2));
    flag2 = !isNaN(num2) && num1 < num2 ? true : false;
    message2 =
      "두번째 숫자를 입력해주세요.\n(첫번째 숫자보다 큰 숫자를 입력해주세요.)";
  }
  console.log(getRandomNumber(num1, num2));
}

//## 확장자 구별 함수 만들기
