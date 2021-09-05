//## 랜덤 숫자 만드는 함수 만들기
function getRandomNumber(num1, num2) {
  const min = Math.ceil(num1 + 1);
  const max = Math.floor(num2);
  return Math.floor(Math.random() * (max - min) + min);
}

const init = () => {
  alert(
    "두 숫자를 입력해주세요.\n(첫번째 숫자는 두번째 숫자보다 작아야합니다.)"
  );
  let num1;
  let message1 = "첫번째 숫자를 입력해주세요.";
  while (true) {
    num1 = prompt(message1);
    if (num1 === null) {
      return init;
    }
    if (num1 !== "" && !isNaN(num1)) {
      num1 = Number(num1);
      break;
    }
    message1 = "첫번째 숫자를 입력해주세요.\n(숫자를 입력해주세요.)";
  }
  let num2;
  let message2 = "두번째 숫자를 입력해주세요.";
  while (true) {
    num2 = prompt(message2);
    if (num2 === null) {
      return init;
    }
    if (num1 !== "" && !isNaN(num1) && num1 < num2) {
      num2 = Number(num2);
      break;
    }
    message2 =
      "두번째 숫자를 입력해주세요.\n(첫번째 숫자보다 큰 숫자를 입력해주세요.)";
  }
  console.log(getRandomNumber(num1, num2));
};

init();

//## 확장자 구별 함수 만들기
function checkFileExtension(fileExtension) {
  let fileType;

  switch (fileExtension) {
    case "png":
    case "jpg":
    case "jpeg":
    case "gif":
    case "bmp": {
      fileType = "image";
      break;
    }
    case "mov":
    case "mp4":
    case "avi":
    case "wmv":
    case "mpg":
    case "mpeg":
    case "mkv": {
      fileType = "video";
      break;
    }
    case "pdf":
    case "doc":
    case "docx": {
      fileType = "doc";
      break;
    }
    default: {
      fileType = "none";
      break;
    }
  }

  return fileType;
}

{
  let str = prompt(
    "파일 이름과 확장자를 입력해주세요.\n입력 형식: 파일이름.확장자"
  );

  const strArray = str.split(".");
  const fileExtension = strArray[1];

  console.log(checkFileExtension(fileExtension));
  //단, 파일이름은 확장자명과 같은 문자열로 만들지 않는다.???
}
