const increaseBtn = document.querySelector('#increase');
const resetBtn = document.querySelector('#reset');
const decareaBtn = document.querySelector('#decrease');
const presentNumber = document.querySelector('#present-number');



increaseBtn.addEventListener('click',function(){
  let count = parseInt(presentNumber.textContent);
  count += 1;
  presentNumber.textContent = count;
});

decareaBtn.addEventListener('click',function(){
  let count = parseInt(presentNumber.textContent);
  if( count > 0){
    count -= 1;
    presentNumber.textContent = count;
  } else {
    presentNumber.textContent = 0;
  }
});

resetBtn.addEventListener('click', function(){
  let = parseInt(presentNumber.textContent);
  count = 0;
  presentNumber.textContent = count;
});