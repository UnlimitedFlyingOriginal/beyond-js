//## 여러가지 구구단 출력하기
//1. **홀수단**인 구구단만 출력해보자.
for (let i = 1; i < 10; i += 2) {
  for (let j = 1; j < 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
//2. 구구단을 가로로 출력해보자.
for (let i = 1; i < 10; i++) {
  let str = "";
  for (let j = 1; j < 10; j++) {
    str += `${i} * ${j} = ${i * j}, `;
  }
  console.log(str);
}

//## 여러가지 별찍기
// 1. [⭐️] 정사각형 만들기
for (let i = 0; i < 5; i++) {
  let str = "";
  for (let j = 0; j < 5; j++) {
    str += "*";
  }
  console.log(str);
}

// 2. [⭐️] 삼각형 별찍기1
for (let i = 0; i < 5; i++) {
  let str = "";
  for (let j = 0; j < 5; j++) {
    str += i >= j ? "*" : " ";
  }
  console.log(str);
}

// 3. [⭐️] 삼각형 별찍기2
for (let i = 4; i > -1; i--) {
  let str = "";
  for (let j = 0; j < 5; j++) {
    str += i > j ? " " : "*";
  }
  console.log(str);
}

// 4. [⭐️⭐️] 삼각형 별찍기3
for (let i = 4; i > -1; i--) {
  let str = "";
  for (let j = 0; j < 5; j++) {
    str += i < j ? " " : "*";
  }
  console.log(str);
}

// 5. [⭐️⭐️] 삼각형 별찍기4
for (let i = 0; i < 5; i++) {
  let str = "";
  for (let j = 0; j < 5; j++) {
    str += i <= j ? "*" : " ";
  }
  console.log(str);
}

// 6. [⭐️⭐️⭐️] 정삼각형 별찍기
let num = 0;
for (let i = 4; i > -1; i--) {
  let str = "";
  for (let j = 0; j < 9; j++) {
    if (j <= 4) {
      str += j < i ? " " : "*";
    } else {
      str += j > i + num ? " " : "*";
    }
  }
  num += 2;
  console.log(str);
}

// 7. [⭐️⭐️⭐️] 거꾸로 정삼각형 별찍기
let num = 8;
for (let i = 0; i < 5; i++) {
  let str = "";
  for (let j = 0; j < 9; j++) {
    if (j <= 4) {
      str += j < i ? " " : "*";
    } else {
      str += j > i + num ? " " : "*";
    }
  }
  num -= 2;
  console.log(str);
}

// 8. [⭐️⭐️⭐️⭐️] 다이아몬드 별찍기
let num = 0;
for (let i = 8; i > -1; i--) {
  let str = "";
  if (i >= 4) {
    for (let j = 0; j < 9; j++) {
      if (j <= 4) {
        str += j < i - 4 ? " " : "*";
      } else {
        str += j > i - 4 + num ? " " : "*";
      }
    }
    num += 2;
  } else {
    for (let j = 0; j < 9; j++) {
      if (j <= 4) {
        str += j < 4 - i ? " " : "*";
      } else {
        str += j > num - 2 - (4 - i) ? " " : "*";
      }
    }
  }
  console.log(str);
}
