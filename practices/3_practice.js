// 구구단 출력

// 1. 구구단 : 홀수단 출력
for (let i = 1; i <= 9; i++) {
  if (i % 2 === 0) continue;
  for (let j = 1; j <= 9; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// 2. 구구단 : 가로 출력
for (let i = 1; i <= 9; i++) {
  let row = '';
  for (let j = 1; j <= 9; j++) {
    row += `${i} * ${j} = ${i * j}, `;
  }
  console.log(row);
}

// ------------------------------

// 별찍기

// 정사각형 만들기
function solution1() {
  for (let i = 0; i < 5; i++) {
    let row = '';
    for (let j = 0; j < 5; j++) {
      row += '*';
    }
    console.log(row);
  }
}

// 삼각형 별찍기1
function solution2() {
  for (let i = 0; i < 5; i++) {
    let row = '';
    for (let j = 0; j < i + 1; j++) {
      row += '*';
    }
    console.log(row);
  }
}

// 삼각형 별찍기2
function solution3() {
  for (let i = 0; i < 5; i++) {
    let row = '';
    for (let j = 0; j < 4 - i; j++) {
      row += ' ';
    }
    for (let k = 0; k < i + 1; k++) {
      row += '*';
    }
    console.log(row);
  }
}

// 삼각형 별찍기3
function solution4() {
  for (let i = 0; i < 5; i++) {
    let row = '';
    for (let j = 0; j < 5 - i; j++) {
      row += '*';
    }
    console.log(row);
  }
}

// 삼각형 별찍기4
function solution5() {
  for (let i = 0; i < 5; i++) {
    let row = '';
    for (let j = 0; j < i; j++) {
      row += ' ';
    }
    for (let j = 0; j < 5 - i; j++) {
      row += '*';
    }
    console.log(row);
  }
}

// 정삼각형 별찍기
function solution6() {
  for (let i = 0; i < 5; i++) {
    let row = '';
    for (let j = 0; j < 5 - i - 1; j++) {
      row += ' ';
    }
    for (let k = 0; k < 2 * i + 1; k++) {
      row += '*';
    }
    console.log(row);
  }
}

// 거꾸로 정삼각형 별찍기
function solution7() {
  for (let i = 0; i < 5; i++) {
    let row = '';
    for (let k = 0; k < i; k++) {
      row += ' ';
    }
    for (let j = 0; j < 2 * (5 - i - 1) + 1; j++) {
      row += '*';
    }
    console.log(row);
  }
}

// 다이아몬드 별찍기
// 🔥 다른 방법 생각해보기
function solution8() {
  for (let i = 0; i < 5; i++) {
    let row = '';
    for (let j = 0; j < 5 - i - 1; j++) {
      row += ' ';
    }
    for (let k = 0; k < 2 * i + 1; k++) {
      row += '*';
    }
    console.log(row);
  }
  for (let i = 0; i < 4; i++) {
    let row = '';
    for (let k = 0; k < i + 1; k++) {
      row += ' ';
    }
    for (let j = 0; j < 2 * (4 - i - 1) + 1; j++) {
      row += '*';
    }
    console.log(row);
  }
}
