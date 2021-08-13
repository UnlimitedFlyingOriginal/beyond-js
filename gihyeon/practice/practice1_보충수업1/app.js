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

function calculateSum(scores) {
  const _scores = scores;
  let sum = 0;

  for (i = 0; i < _scores.length; i++) {
    sum += _scores[i];
  }

  return sum;
}

function calculateAverage(scores) {
  const _scores = scores;
  let sum = calculateSum(_scores);
  let average = sum / _scores.length;

  return average;
}

function checkMakeUpClass(averageScore) {
  const _averageScore = averageScore;
  if (_averageScore <= 50) {
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
