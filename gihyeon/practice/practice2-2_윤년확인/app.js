function inputYear() {
  let year;

  while (true) {
    year = parseInt(prompt("윤년확인(양의 정수를 입력하세요.)"));
    if (!isNaN(year)) break;
  }

  return year;
}

function checkLeapYear(year) {
  const _year = year;

  if (
    _year % 4 !== 0 ||
    (_year % 4 === 0 && _year % 100 === 0 && _year % 400 !== 0)
  ) {
    console.log(_year + "년은 평년입니다.");
  } else {
    console.log(_year + "년은 윤년입니다.");
  }
}

function init() {
  const year = inputYear();
  checkLeapYear(year);
}

init();
