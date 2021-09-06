const [$tomato, $dodgerblue, $hotpink, $yellowgreen, $chocolate, $reset] =
  document.querySelectorAll("button");
const $background = document.querySelector(".background");

const onClickButton = (event) => {
  let color = event.target.textContent;

  if (color === "RESET") {
    $background.style.background = "white";
  } else {
    $background.style.background = color;
  }
};

$tomato.addEventListener("click", onClickButton);
$dodgerblue.addEventListener("click", onClickButton);
$hotpink.addEventListener("click", onClickButton);
$yellowgreen.addEventListener("click", onClickButton);
$chocolate.addEventListener("click", onClickButton);
$reset.addEventListener("click", onClickButton);
