const [$tomato, $dodgerblue, $hotpink, $yellowgreen, $chocolate, $reset] =
  document.querySelectorAll("button");
const $background = document.querySelector(".background");

let clicked;

const onClickButton = (event) => {
  const click = event.target;
  const color = click.textContent;

  if (clicked !== undefined) {
    clicked.style.color = "white";
    clicked.style.background = clicked.textContent;
  }

  if (color === "RESET") {
    $background.style.background = "white";
    return;
  }

  $background.style.background = color;
  click.style.color = color;
  click.style.background = "white";

  clicked = click;
};

$tomato.addEventListener("click", onClickButton);
$dodgerblue.addEventListener("click", onClickButton);
$hotpink.addEventListener("click", onClickButton);
$yellowgreen.addEventListener("click", onClickButton);
$chocolate.addEventListener("click", onClickButton);
$reset.addEventListener("click", onClickButton);
