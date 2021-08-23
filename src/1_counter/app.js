const $result = document.querySelector("#result");
let result = Number($result.textContent);

const onClickButton = (event) => {
  switch (event.target.textContent) {
    case "+":
      result += 1;
      $result.textContent = result;
      break;
    case "reset":
      result = 0;
      $result.textContent = result;
      break;
    case "-":
      result -= 1;
      $result.textContent = result;
      break;
    default:
      break;
  }
};

document.querySelector("#increase").addEventListener("click", onClickButton);
document.querySelector("#reset").addEventListener("click", onClickButton);
document.querySelector("#decrease").addEventListener("click", onClickButton);
