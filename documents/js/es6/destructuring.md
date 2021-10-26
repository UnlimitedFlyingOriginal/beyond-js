# 구조 분해 할당

> Destructuring

객체나 배열 안의 요소를 해체하여 개별 변수에 담아서 직접적으로 접근 가능하게 만들어 주는 자바스크립트 표현식(Syntax)를 말한다. 몇가지 퀴즈를 통해서 알아보자.

## 배열

### 1. 기본사용법

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

// 4)
const [, , third] = positions;
console.log(third) // ?
```

<details close>
<summary>정답</summary>
1) Gabrielle, Niko, ['Kate', 'Fernando', 'Mike'] <br />
2) Syntax Error : Rest element must be last element <br />
3) Gabrielle, Niko, Kate <br />
4) Kate <br />
</details>

<br />

[참고] [Rest Paramater](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/rest_parameters)

정해지지 않은 수를 배열로 나타나게 할 수 있다.

### 2.

> swap number

```js
let a = 10;
let b = 20;

[a, b] = [b, a]; // 이 부분의 의미는?

console.log(a); // ?
console.log(b); // ?
```

<details close>
<summary>정답</summary>
const arr = [b, a]; <br />
[a, b] = arr;
</details>
<br />

### 3.

> 여러 개의 반환값

```js
function input() {
  // 여러 개의 입력값을 받는 로직 : 편의상 값 할당
  let input1 = 10;
  let input2 = 'input';
  let input3 = false;

  return [input1, input2, input3];
}

const [resultNum, resultStr, resultBool] = input();
console.log(resultNum, resultStr, resultBool); // ?
```

<details close>
<summary>정답</summary>
10 input false
</details>
<br />

## 객체

### 1.

```js
const user = {
  name: 'jjanmo',
  age: 20,
  job: 'artist',
  favMovies: ['타짜', 'dark knight'],
};

const { name, job, favMovies } = user;
console.log(name, job, favMovies); // 1) ?

const {
  name,
  job,
  favMovies: [first, second],
} = user;
console.log(name, job, favMovies); // 2) ?
console.log(name, job, first); // 3) ?
```

<details close>
<summary>정답</summary>
1) jjanmo artist [ '타짜', 'dark knight' ] <br/>
2) ReferenceError: favMovies is not defined <br/>
   favMovies에서 depth를 한단계 더 들어가면 해당 변수로는 접근이 불가능하다. <br/>
   단지, 어디로 접근한다라는 경로를 나타내는 역할을 하게된다. <br/>
3) jjanmo artist 타짜 <br/>
</details>
<br />

### 2.

```js
const user = {
  name: 'Michael',
  years: 25,
};

const { name, years, isAdmin = false } = user;
console.log(name, years, isAdmin);
```

<details close>
<summary>정답</summary>
Michael 25 false
</details>
<br />

### 3.

```js
const obj = {
  a: 'Apple',
  b: 'Boy',
  c: 'Cat',
  d: 'Dog',
  e: 'Elephant',
};

const { a, b, ...rest } = obj;
console.log(a, b, rest);
```

<details close>
<summary>정답</summary>
Apple Boy { c: 'Cat', d: 'Dog', e: 'Elephant' }
</details>
<br />

### 4.

> nested object

https://medium.com/@pyrolistical/destructuring-nested-objects-9dabdd01a3b8
