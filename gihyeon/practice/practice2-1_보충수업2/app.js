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

function checkMakeUpClass(scores) {
  const _scores = scores;

  if (_scores[0] <= 50 && _scores[1] <= 50 && _scores[2] <= 50) {
    console.log("종합반");
  } else if (_scores[0] <= 50 || _scores[1] <= 50 || _scores[2] <= 50) {
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
