const $buttons = document.querySelectorAll("button");
const $background = document.querySelector(".background");

let tempTarget;

const onClickButton = (event) => {
  const target = event.target;
  const color = target.textContent;
  const RESET = "RESET";
  const resetColor = "white";

  if (tempTarget) {
    tempTarget.style.color = resetColor;
    tempTarget.style.background = tempTarget.textContent;
  }

  if (color === RESET) {
    $background.style.background = resetColor;
    return;
  }

  $background.style.background = color;
  target.style.color = color;
  target.style.background = resetColor;

  tempTarget = target;
};

$buttons.forEach((button) => {
  button.addEventListener("click", onClickButton);
});
