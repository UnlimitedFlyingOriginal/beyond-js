# 변수 선언 키워드

> 자바스크립트에서는 변수 선언 키워드에 사용하는 것이 3가지가 있다. 최근에는 몇가지 이유로 인해 let과 const를 주로 사용한다. 하지만 레거시 코드를 보면 var라는 키워드를 자주 볼 수 있다. 그렇기 때문에 var 의 특징에 대해서도 알아둘 필요성이 있다. 이제부터 각 키워드를 몇 가지 관점에서 비교해보고 어떤 상황에서 이런 키워드를 사용해야할지에 대해서 알아보자.

## 비교 관점

### 스코프

### 변수 생성 과정

### 호이스팅

## var

```js
var text = 'outside';
function log() {
  console.log(text);
  var text = 'inside';
}
log();
```

## let

## const

https://dandkim.com/js-var-let-const/
