# 구조 분해 할당

> Destructuring

객체나 배열 안의 요소를 해체하여 개별 변수에 담아서 직접적으로 접근 가능하게 만들어 주는 자바스크립트 표현식(Syntax)를 말한다. 몇가지 퀴즈를 통해서 알아보자.

## 객체

기본 사용법
상황을 만들어서
중간 값은 가져오지 못한다

- default parameter 섞어서 사용할 수 있다.

### 1.

```js
const positions = ["Gabrielle", "Niko", "Kate", "Fernando", "Mike"];

// 1)
const [first, second, ...rest] = positions;
console.log(first, second, rest); // ?

// 2)
const [first, ...rest, second] = positions;
console.log(first, second, rest) // ?

// 3)
const [first, rest, second] = positions;
console.log(first, second, rest) // ?
```

<details close>
<summary>정답</summary>
<br>
1) Gabrielle, Niko, ['Kate', 'Fernando', 'Mike'] <br />
2) Syntax Error : Rest element must be last element <br />
3) Gabrielle, Niko, Kate <br />
</details>

<br />

[참고] [Rest Paramater](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/rest_parameters)

정해지지 않은 수를 배열로 나타나게 할 수 있다.

### 2.

```js

```

### 3.

```js

```

### 4.

```js

```

## 배열
