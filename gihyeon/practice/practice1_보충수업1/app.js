function inputScores() {
  const korean = isNaN(parseInt(prompt("국어점수를 입력해주세요.")))
    ? 0
    : korean;
  const english = isNaN(parseInt(prompt("영어점수를 입력해주세요.")))
    ? 0
    : english;
  const math = isNaN(parseInt(prompt("수학점수를 입력해주세요."))) ? 0 : math;
  const scores = [korean, english, math];

  return scores;
}

function calSum(scores) {
  let sum = 0;

  for (i = 0; i < scores.length; i++) {
    sum += scores[i];
  }

  return sum;
}

function calAvg(scores) {
  const sum = calSum(scores);
  const length = scores.length;
  const avg = sum / length;

  return avg;
}

function checkMakeUpClass(avgScore) {
  if (avgScore <= 50) {
    console.log("보충수업 대상자입니다.");
  } else {
    console.log("보충수업 대상자가 아닙니다.");
  }
}

function init() {
  const scores = inputScores();
  const avgScore = calAvg(scores);
  checkMakeUpClass(avgScore);
}

init();
