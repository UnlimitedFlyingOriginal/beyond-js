//## 여러가지 구구단 출력하기
//1. **홀수단**인 구구단만 출력해보자.
for (let i = 1; i < 10; i += 2) {
  for (let j = 1; j < 10; j++) {
    console.log(i + " * " + j + " = " + i * j);
  }
}
//2. 구구단을 가로로 출력해보자.
let str;
for (let i = 1; i < 10; i++) {
  str = "";
  for (let j = 1; j < 10; j++) {
    str += i + " * " + j + " = " + i * j + ", ";
  }
  console.log(str);
}
