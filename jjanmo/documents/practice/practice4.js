// 1. 구구단 : 홀수단 출력
for (let i = 1; i <= 9; i++) {
  if (i % 2 === 0) continue;
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// 2. 구구단 : 가로로 출력
for (let i = 1; i <= 9; i++) {
  let row = '';
  for (let j = 1; j <= 9; j++) {
    row += `${i} * ${j} = ${i * j}, `;
  }
  console.log(row);
}

// 이외 다른 좋은 방법들이 있을 수 있음 😎
