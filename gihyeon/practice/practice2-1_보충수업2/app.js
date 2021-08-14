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

function checkMakeUpClass(scores) {
  if (scores[0] <= 50 && scores[1] <= 50 && scores[2] <= 50) {
    console.log("종합반");
  } else if (scores[0] <= 50 || scores[1] <= 50 || scores[2] <= 50) {
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
