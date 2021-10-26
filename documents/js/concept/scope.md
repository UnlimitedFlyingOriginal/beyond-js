# Scope에 대해서

> Scope === 유효범위

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/block

## 정의 & 필요성

## function scope

## block scope

```js
var a = 10;
let b = 20;

{
  var a = 30;
  let b = 40;
}

console.log(a); // 1) ?
console.log(b); // 2) ?
```

Quiz

https://www.hmi-tech.in/activities/Javascript-hoisting-scope-quiz.html

https://maryrosecook.com/blog/post/a-pop-quiz-purporting-to-be-about-scope-in-javascript-that-is-actually-a-polemic-about-why-modules-are-a-good-idea

https://min9nim.vercel.app/2019-05-23-scope-quiz/

https://www.codequizzes.com/javascript
