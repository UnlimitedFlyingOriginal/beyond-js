// 구구단 출력

// 1. 구구단 : 홀수단 출력
for(let i = 2; i <= 9; i++) {
  if( i % 2 === 0) continue;
  for (let j = 1; j <= 9; j++){
    console(`${i} * ${j} = ${i * j} `);
  }
}

// 2. 구구단 : 가로 출력
let 
for(let i = 2; i <= 9; i++) {
  for (let j=1; j <= 9; j++){
    console.log(`${i} * ${j} = ${i * j},`);
  }
}
// ------------------------------

// 별찍기
// 정사각형 만들기
let star = '';
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        star += '*';
    }
    star += '\n';
}
console.log(star);

// 삼각형 별찍기1
let star = '';
for (let i = 0; i < 5; i++) {
  for(let j = 0; j <= i; j++) {
    star += '*';
  }
  star += '\n';
}
console.log(star);

// 삼각형 별찍기2
for(let i = 1; i <= 5; i++) {
  let star = '';
  for(let j = 0; j <= 5; j++) {
    if( 5 - i < j){
      star += '*';
    } else {
      star += ' ';
    }
  }
  console.log(star);
}

// 삼각형 별찍기3
for(let i = 5; i > 0; i--) {
  let stars = '';
  for(let j = 1; j <= i; j++){
    stars += '*';
  }
  console.log(stars);
}

// 삼각형 별찍기4


// 정삼각형 별찍기


// 거꾸로 정삼각형 별찍기

// 다이아몬드 별찍기
// 🔥 다른 방법 생각해보기

