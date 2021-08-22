/*
## 보충수업1

한 학교에서 국어, 영어, 수학 평균 점수가 50점 이하인 학생들을 대상으로 보충수업을 진행합니다. 보충수업 대상자인지 아닌지를 판별할 수 있는 함수를 만들어 보세요.

- 함수는 국어, 영어, 수학 점수 3가지의 값을 인자(parameter)로 받습니다. 입력되는 값들은 숫자입니다.
- 입력받은 세 점수의 평균 점수가 50점 이하라면 보충수업 대상자입니다.
- 수학 보충수업 대상자라면 함수는 "보충수업 대상자입니다"라는 문자열을 콘솔에 출력하고, 아니라면 아무런 값을 출력하지 않습니다.

위 조건을 만족하는 함수를 만들고, 테스트를 통해 제대로 작동하는지 확인해 보세요.
*/

function inputScores() {
  let korean = parseInt(prompt("국어점수를 입력해주세요."));
  korean = isNaN(korean) ? 0 : korean;
  let english = parseInt(prompt("영어점수를 입력해주세요."));
  english = isNaN(english) ? 0 : english;
  let math = parseInt(prompt("수학점수를 입력해주세요."));
  math = isNaN(math) ? 0 : math;

  let scores = [korean, english, math];
  
  return scores;
}

function calculateAverage(scores) {
  let sum = 0;
  for (i = 0; i < scores.length; i++) {
    sum += scores[i];
  }

  let average = sum / scores.length;
  return average;
}

function checkMakeUpClass(averageScore) {
  if (averageScore <= 50) {
    console.log("보충수업 대상자입니다.");
  } else {
    console.log("보충수업 대상자가 아닙니다.");
  }
}

function init() {
  const scores = inputScores();
  const averageScore = calculateAverage(scores);
  checkMakeUpClass(averageScore);
}

init();
