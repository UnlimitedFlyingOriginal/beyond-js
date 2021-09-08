const $buttons = document.querySelectorAll("button");
const $background = document.querySelector(".background");

let clicked;

const onClickButton = (event) => {
  const target = event.target;
  const color = target.textContent;

  if (clicked) {
    clicked.style.color = "white";
    clicked.style.background = clicked.textContent;
  }

  if (color === "RESET") {
    $background.style.background = "white";
    return;
  }

  $background.style.background = color;
  target.style.color = color;
  target.style.background = "white";

  clicked = target;
};

$buttons.forEach((button) => {
  button.addEventListener("click", onClickButton);
});
