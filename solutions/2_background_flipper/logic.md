# Logic

> 순수하게 내가 구현하는 생각의 과정을 정리해보았습니다. 😎

<br />

## 첫번째 생각

> ver1.0

우선적으로 1)구현에 초점을 맞추고, 2)기능 단위로 분리하여 구현하려고 노력하였다.

<br />
<br />

## 두번째 생각

> ver2.0

> 상태와 랜더링 (state & render) 관점 ㆐ (비슷한 의미) 로직과 스타일

<br />

### 상태

여기서 말하는 **상태의 개념**은 무엇일지 생각해보자.

1. 상태 : 현재 보여지는 색깔❓

2. 보여지는 색깔은 버튼을 클릭하여서 만들어진 것 -> `어떤 버튼을 클릭했는가` 라는 상태

   > state => clicked button

✅ 정리

1. FLOW(LOGIC) : 버튼 클릭 -> 상태(색깔) 변화 -> (백그라운드/버튼의)스타일 변화

2. 버튼 클릭부터 상태 변화까지는 `로직 해당` / 스타일 변화는 `랜더링`에 해당

<br />

### 이 FLOW(LOGIC)를 어떻게 구현할 것인가?

로직상 버튼 클릭과 색깔이 연결되어 있다.

> 현재 클릭한 버튼을 색깔로 구분 -> 색깔을 엘리먼트의 클래스(아이디)로 설정

> 클릭한 색깔 === 클릭한 버튼(의 엘리먼트) : 색깔만 알면 무엇을 클릭했는지 알 수 있다.

<br />

### 문제 발생

이전 상태를 기억해야하는 문제가 발생 : 상태 변화로 인해 버튼을 랜더링 할 때, 이 전에 누른 버튼은 원래 상태로 돌려놔야한다.

✅ 해결책

1.  그냥 다 처음으로 돌린다. -> 초기화 기능의 함수를 1개 더 생성 `<ver2.0>`

2.  이전 상태를 기억한다. -> state 1개 더 생성 `<ver1.0>`