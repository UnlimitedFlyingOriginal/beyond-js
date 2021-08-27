const $resultValue = document.querySelector(".resultValue");
const $increase = document.querySelector(".increase");
const $reset = document.querySelector(".reset");
const $decrease = document.querySelector(".decrease");

$increase.addEventListener('click',function(){
  let count = Number($resultValue.textContent);
   count = count + 1;
   $resultValue.textContent = count;
});

$decrease.addEventListener('click',function(){
  let count = Number($resultValue.textContent);
   count = count - 1;
   $resultValue.textContent = count;
});

$reset.addEventListener('click',function(){
  let count = Number($resultValue.textContent);
   count = 0;
   $resultValue.textContent = count;
});