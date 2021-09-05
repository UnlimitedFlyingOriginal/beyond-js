# 코드 리뷰를 통해서 알아보는 논리연산자의 사용법

## 상황 & 조건

- 두 개의 **숫자** 를 차례로 입력받는 상황이다.

- 입력은 **prompt()** 를 통해서 입력받는다.

- 입력 받는 수는 항상 첫번째 입력 받는 수(a)가 두번째 입력 받는 수(b)보다 작아야한다. : **a < b**

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
   const numStr = '7';
   const str = '일곱';

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

> [참고] 기현이 코드를 기준으로 생각의 흐름을 따라가보자. 이렇게만 구현해야하는 것은 아니다. 항상 코드의 다양성은 존재한다. 여기서는 진행한 코드 리뷰를 바탕으로 코드를 좀 더 분석하여 그 안에 있는 자바스크립트 개념을 좀 더 알아보기 위함이다.

<br />

### 1. 첫번째 숫자 입력

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

<br />

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

> '123asd' → parseInt('123asd') → 123 → isNaN() : false → 예상결과 ❌

<br />

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
구현하면서 느끼는 점이 있을 것이다. 숫자와 문자열만을 구분하고자 시작된 유효성 검사가 예상치 못한 작은(?) 오류/버그로 인해서 더 많은 코드가 적혀지고 개념들이 들어가게 되었다. 다르게 생각해보면 굳이 저런 오류까지 잡아야하는가에 대한 고민이 생길 수도 있다. 나아가 이러한 사소한 오류들을 잡아주는 작업이 overengineering이라는 생각이 들 수도 있다.

지금 과정을 잘 생각해보면 하나를 잡으려다가 다른 오류들이 연속해서 발생하고 있다. 그렇다면 0과 ''를 구분하려고 했더니, 숫자+문자열에서 문제가 발생하였다. 즉, 유효성 검사에 있어서 일관된 로직이 없이 주먹구구식으로 대응했기 때문에 발생한 현상이라고 생각한다.

만약에 주먹구구식임에도 몇가지 코드의 추가로 문제없이 작동했다면, 우선은 그것으로 통과해도 될 것이다. 그러나 위처럼 지속적인 문제가 발생한다면, 그 때는 일관된 유효성 검사를 위한 로직을 생각해볼 필요가 있다.
```

<br />

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

  > 정규표현식은 찾아보도록 😎 , 정규표현식은 봐도, 안쓰다보면 안드로메다로 가는 그런 부분이라...

<br />

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

<br />

```js
let num1;
const message1 = '첫번째 숫자를 입력해주세요.';

while (!num1) {
  const text = prompt(message1);
  num1 = checkInput(text) && text;
}

console.log(num1);
```

> 위 코드처럼 논리연산자를 이용해서 변수 1개만을 사용해서 리팩토링할 수 있다. 이 때 주의해야할 점은 num1에 담긴 값은 **숫자문자열**이라는 점인다. 추후에 사용할 때, 이 점을 생각하고 사용하면 된다.

<br />

### 6. 두번째 숫자 입력

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

> 두번째 숫자 입력은 첫번째 숫자 입력과 마찬가지로 구현하면 된다. 단, flag2 부분에서 `num1 < num2` 만을 추가하면 위에서 요구한 조건을 맞출 수 있다.

<br />

### 7. 취소 기능 구현

```js
if (text === null) return;
```

> 취소 버튼을 클릭하거나 ESC를 누르면 prompt()에 null 값이 들어간다. prompt()가 작동한 바로 다음에 조건문에 사용하여 나가는 기능을 구현할 수 있다.

<br />

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

<br />

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

> 위 코드는 나만의 방식으로 리팩토링한 것이기 때문에 이 코드가 더 좋은 코드다 라고 말하기에는 퀄리티가 부족할 수 있다. 하지만 중요한 점은 중복된 부분이 보인다면 뭔가 합쳐보려는 과정을 도전해보는 것이다. 그러한 과정 속에서 좀 더 가독성 높고, 효율적인 코드가 구현될 수 있다고 생각한다.
