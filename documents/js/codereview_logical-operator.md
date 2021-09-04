# 코드 리뷰를 통해서 알아보는 논리연산자의 사용법

## 상황 & 조건

- 두 개의 **숫자** 를 차례로 입력받는 상황이다.

- 입력은 **prompt()** 를 통해서 입력받는다.

- 입력 받는 수는 항상 첫번째 입력 받는 수(a)가 두번째 입력 받는 수(b)보다 커야한다. : **a < b**

- esc 혹은 취소 버튼을 누르면 입력창을 닫을 수 있다.

<br />

## 생각의 흐름 정리

`로직 설명:`

1. prompt()를 통해서 숫자를 입력 받는다.

   > prompt()로 입력받은 값은 무조건 **문자열**로 인식하기 때문에 받은 값이 문자열 숫자인지 문자열인지 구분이 필요하다.

   > 이 때 숫자로 강제형변환을 통해서 해당 값이 NaN인지 여부를 확인한다.(`isNaN()` 사용). 밑에서 추가 설명.

2. 한 번에 정확히 입력받는다는 보장이 없는 상황이기 때문에 정확한 숫자를 입력받을 때까지 무한 반복이 필요하다.

   > while() 사용

3. 첫번째 받은 값이 두번째 입력받은 값보다 작은지 체크해야한다.

4. isNaN()에 대해서

   ```js
   const numStr = '10';
   const str = '십';

   isNaN(numStr); // false
   isNaN(str); // true
   ```

   > isNaN() 함수가 인자로 들어온 값이 NaN(Not A Number)인지 아닌지를 판단하여 NaN이면 true, NaN이 아니면 false를 반환한다. 만약에 인자로 숫자가 아닌 값이 들어온다면, 먼저 인자를 숫자로 강제형변환을 하여 그 값에 따라서 NaN인지 여부를 판단한다.

   > 사실 isNaN()은 우리가 생각하는 것보다 변칙적인 부분이 많다.😭 그래서 이를 해결하기 위해서 좀 더 엄격한 `Number.isNaN()` 이라는 것이 나왔다. 그럼에도 isNaN()은 헷갈린다. 여러가지 문서를 참고해서 다양한 예시와 상황을 접해서 좋은 방법을 습득해보자.

   > [isNaN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/isNaN) | [Number.isNaN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN) | [참고1](https://mygumi.tistory.com/335) | [참고2](https://on1ystar.github.io/javascript/2021/03/30/JavaScript-7/)

5. prompt()로 무엇이 들어오는지에 따라서 isNaN()의 결과값을 정리해보자.

   | prompt()의 input | prompt()의 결과값 | 숫자 강제형변환(Number(인자)) | isNaN()의 결과값 | 예상 |
   | :--------------: | :---------------: | :---------------------------: | :--------------: | :--: |
   |      문자열      |      문자열       |              NaN              |       True       |  O   |
   |   문자열 숫자    |    문자열 숫자    |            number             |      False       |  O   |
   |       숫자       |    문자열 숫자    |            number             |      False       |  O   |
   |     빈문자열     |     빈문자열      |               0               |      False       |  ?   |

<br />

## 구현 과정

> [참고] 기현이 코드를 기준으로 생각의 흐름을 따라가보자. 이렇게만 구현해야하는 것은 아니다. 항상 코드의 다양성은 존재한다. 여기서는 코드 리뷰를 진행했기 때문에 해당 코드를 좀 더 분석하여 그 안에 있는 자바스크립트 개념을 좀 더 알아보기 위함이다.

### 1.

```js
let num1, flag1;
// num1 : 입력받은 첫번째 숫자를 담는 변수
// flag1 : while문을 빠져나오기 위한 변수
const message1 = '첫번째 숫자를 입력해주세요.';
while (!flag1) {
  const text = prompt(message1);
  num1 = Number(text);
  flag1 = !isNaN(text); // === !isNaN(num1)
}

console.log(num1);
```

`문제점:`

빈 문자열(아무 입력 없이 엔터)을 입력하면 0을 입력한 것과 동일한 결과가 나온다.

> '0' → Number('0') → 0 → isNaN() : false → 예상결과 ⭕️

> 빈문자열 → Number('') → 0 → isNaN() : false → 예상결과 ❌

### 2.

```js
let num1, flag1;
const message1 = '첫번째 숫자를 입력해주세요.';
while (!flag1) {
  const text = prompt(message1);
  num1 = Number(text);
  flag1 = !isNaN(parseInt(text));
}

console.log(num1);
```

`문제점:`

숫자 + 문자열을 입력하면 문자열을 파싱하여 숫자만을 입력하게된다.

> '1a2s3d' → parseInt('1a2s3d') → 1 → isNaN() : false → 예상결과 ❌

### 3.

```js
let num1, flag1;
const message1 = '첫번째 숫자를 입력해주세요.';
while (!flag1) {
  const text = prompt(message1);
  num1 = Number(text);
  flag1 = !isNaN(parseInt(text) && Number(text));
}

console.log(num1);
```

`문제점:`

parseInt()의 작동원리를 이해하면 문제점이 보인다. 0으로 시작하는 숫자 + 문자열의 경우는 0을 반환하기 때문에 예상과는 다른 결과를 보여준다. 아래는 위 결과값을 표로 정리해본 것이다.

![codereview1-1](/screenshots/logical-operator1.png)

> #1은 기존 코드이고 #2는 바꾸면 어떤 결과를 나타낼 것인지 확인해본 것이다. 핑크행이 문제가 있는(?) 행을 나타낸다.

```
이러한 각각의 오류/버그 상황을 각각 어떻게 해결할 것인가에 대한 고민이 빠지게 된다. 모든 오류사항을 생각하고 고민해서 잡아주는 것이 생각보다 크리티컬한 오류가 아닌 것에 대한 시간 소모로 이어질 수 있다. 그렇기 때문에 사실 위와 같은 [숫자 + 문자열]에 대한 오류를 해결하는 것이 Overengineering이라고 생각한다. 만약에 이런 경우는 실제로 사용될 때 문제가 된다면 그 때 생각하고 해결하면 된다고 생각한다.

가장 중요한 것은 유효성 검사를 진행할 때, 항상 일관된 로직을 짜는 것이 중요하다고 생각한다. 위에 처럼 주먹구구식으로 하나씩 체크하면 상황에 따라서 어떤 오류가 나올지 예상할 수 없기 때문이다.
```

### 4. 일관된 체크 로직

- 받은 인풋값을 글자 하나씩 체크 하는 방법

  ```js
  // 예시
  const tests = ['1233', 'asdf', '0', '', '7asdasd', '0asdasd'];

  /*
   return
      - true : 유효한 인풋(숫자만)
      - false : 유효하지 않은 인풋(글자 포함)
  */
  function checkInput(text) {
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const textArray = text.split('');

    if (textArray.length === 0) return false;

    return textArray.every(char => numbers.includes(char));
  }

  // 테스트
  tests.forEach(test => console.log(checkInput(test)));
  ```

  > 빈 문자열의 경우 split() 결과로 빈배열을 반환한다.

- 정규표현식 사용

  > 정규표현식은 찾아보도록 😎 ;; 정규표현식은 봐도, 안쓰다보면 안드로메다로 가는 그런 부분이라...

### 5. 유효성 검사를 이용한 코드 리펙토링

```js
let num1, flag1;
const message1 = '첫번째 숫자를 입력해주세요.';
while (!flag1) {
  const text = prompt(message1);
  num1 = Number(text);
  flag1 = checkInput(text);
}

console.log(num1);
```

`생각해볼 점:`

불필요한 변수들이 보인다. `num1, flag1` 라는 변수 2개 써야할까?

```js
let num1;
const message1 = '첫번째 숫자를 입력해주세요.';

while (!num1) {
  const text = prompt(message1);
  if (text === null) return;
  num1 = checkInput(text) && text;
}

console.log(num1);
```

위 코드처럼 논리연산자를 이용해서 변수 1개만을 사용해서 리팩토링할 수 있다. 이 때 주의해야할 점은 num1에 담긴 값은 **숫자문자열**이라는 점인다. 추후에 사용할 때, 이 점을 생각하고 사용하면 된다.

### 6.

```js
// 첫번째 숫자 입력
let num1, flag1;
const message1 = '첫번째 숫자를 입력해주세요.';

while (!flag1) {
  const text = prompt(message1);
  num1 = Number(text);
  flag1 = checkInput(text);
}

// 두번째 숫자 입력
let num2, flag2;
let message2 = '두번째 숫자를 입력해주세요.';

while (!flag2) {
  const text = prompt(message2);
  num2 = Number(text);
  flag2 = checkInput(text) && num1 < num2;
}

console.log(num1, num2);
```

### 7. 취소 기능 구현

```js
if (text === null) return;
```

> 취소 버튼을 클릭하거나 ESC를 누르면 prompt()에 null 값이 들어간다. prompt()가 작동한 바로 다음에 조건문에 사용하여 나가는 기능을 구현할 수 있다.

### 8. 전체 코드 다시 보기

```js
function checkInput(text) {
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const textArray = text.split('');

  if (textArray.length === 0) return false;

  return textArray.every(char => numbers.includes(char));
}

function input() {
  let num1, flag1;
  const message1 = '첫번째 숫자를 입력해주세요.';

  while (!flag1) {
    const text = prompt(message1);

    if (text === null) return;
    num1 = Number(text);
    flag1 = checkInput(text);
  }

  let num2, flag2;
  let message2 = '두번째 숫자를 입력해주세요.';

  while (!flag2) {
    const text = prompt(message2);

    if (text === null) return;

    num2 = Number(text);
    flag2 = checkInput(text) && num1 < num2;
  }

  return [num1, num2];
}
```

`생각해볼 점:`

- 코드의 중복

### 9. 리팩토링

```js
function input() {
  let numbers = [];
  while (numbers.length !== 2) {
    const message = `${numbers.length + 1}번째 숫자를 입력해주세요.(1번째 숫자 < 2번째 숫자)`;
    const text = prompt(message);

    if (text === null) return;

    // 숫자 여부 체크
    checkInput(text) && numbers.push(Number(text));

    // 크기순 여부
    if (numbers.length === 2 && numbers[0] >= numbers[1]) numbers = [];
  }

  return numbers;
}
```
