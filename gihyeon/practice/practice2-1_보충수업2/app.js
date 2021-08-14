/*
## 보충수업2

한 학교에서 학생들의 국어, 영어, 수학 점수로 보충수업 대상자를 뽑습니다. 아래 규칙을 만족하는 함수를 만들어 보세요.

- 함수는 국어, 영어, 수학 점수 3가지의 값을 입력받습니다. 점수는 숫자입니다.
- 모든 과목의 점수가 50점 이하라면 "종합반" 이라는 문자열을 return합니다.
- 특별반이 아닌 학생들 중 한과목이라도 50점 이하라면 "단과반"이라는 문자열을 return합니다.
- 나머지 학생들은 "보충 수업 없음"이라는 문자열을 return합니다.

위 조건을 만족하는 함수를 만들고, 테스트를 통해 제대로 작동하는지 확인해 보세요.
*/

function inputScores() {
  let korean = parseInt(prompt("국어점수를 입력해주세요."));
  korean = isNaN(korean) ? 0 : korean;
  let english = parseInt(prompt("영어점수를 입력해주세요."));
  english = isNaN(english) ? 0 : english;
  let math = parseInt(prompt("수학점수를 입력해주세요."));
  math = isNaN(math) ? 0 : math;

  // let scores = (korean, english, math);
  let scores = { korean: korean, english: english, math: math };

  return scores;
}

function checkMakeUpClass(scores) {
  // if (scores[0] <= 50 && scores[1] <= 50 && scores[2] <= 50) {
  //   console.log("종합반");
  // } else if (scores[0] <= 50 || scores[1] <= 50 || scores[2] <= 50) {
  //   console.log("단과반");
  // } else {
  //   console.log("보충 수업 없음");
  // }

  if (scores.korean <= 50 && scores.english <= 50 && scores.math <= 50) {
    console.log("종합반");
  } else if (scores.korean <= 50 || scores.english <= 50 || scores.math <= 50) {
    console.log("단과반");
  } else {
    console.log("보충 수업 없음");
  }
}

function init() {
  const scores = inputScores();
  checkMakeUpClass(scores);
}

init();
