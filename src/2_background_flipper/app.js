const $body = document.querySelector("body");
const $buttons = document.querySelectorAll("button");
const $reset = document.querySelector(".reset");
const colors = ["tomato", "blue", "pink", "green", "gold"];
const resetColor = "white";

function ChangeHandler(event) {
  for (let i = 0; i < $buttons.length; i++) {
    if ($buttons[i].textContent === event.target.textContent) {
      $body.style.backgroundColor = colors[i];
      $buttons[i].style.backgroundColor = 'white';
    }
  }
  if ($reset.textContent === event.target.textContent) {
    $body.style.backgroundColor = resetColor;
  }
}

for (let i = 0; i < $buttons.length; i++) {
  $buttons[i].addEventListener("click", ChangeHandler);
}
$reset.addEventListener("click", ChangeHandler);


