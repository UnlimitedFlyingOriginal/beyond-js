const $body = document.querySelector("body");
const $buttons = document.querySelectorAll("button");
const $reset = document.querySelector(".reset");
const resetColor = "white";
const colors = ["tomato", "blue", "pink", "green", "gold"];

let previousButtonColor;  // 이전에 누른 색

function changeHandler(event) {
  const color = event.target.textContent;

  // 배경화면 변경
  // 버튼색 변경
  // 버튼텍스트 변경
  $body.style.backgroundColor = color;
  event.target.style.backgroundColor = 'white';
  event.target.style.color = color;
 
  if(previousButtonColor) {
    // 이전 버튼을 리셋하는 로직
    // -> 알아야 할 정보 : 버튼 배경색 / 어떤 버튼이 눌렀는지 -> 한가지
    // -> 버튼 배경색 / 버튼 텍스트 색 = black
    
    const previousTarget = document.querySelector(`.${previousButtonColor.toLowerCase()}`);
    previousTarget.style.backgroundColor = previousButtonColor;
    previousTarget.style.color = 'black'
    
  }
  previousButtonColor = color;

  if(color === 'RESET') {
    previousButtonColor = null;
    $body.style.backgroundColor = 'white';
    event.target.style.backgroundColor = 'black';
    event.target.style.color = 'white';
  } 
}

for (let i = 0; i < $buttons.length; i++) {
  $buttons[i].addEventListener("click", changeHandler);
}


