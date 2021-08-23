// 1번 : 보충수업1 solution

/**
 * @param {number} korean
 * @param {number} english
 * @param {number} math
 * @returns string
 *
 */

function solution(korean, english, math) {
  const average = (korean + english + math) / 3;

  if (average <= 50) return '보충수업 대상자';
}

// 1번 : 보충수업2 solution

/**
 * @param {number} korean
 * @param {number} english
 * @param {number} math
 * @returns string
 *
 */

function solution1(korean, english, math) {
  const average = (korean + english + math) / 3;

  if (average <= 50) return '종합반';
  else {
    if (korean > 50 && english > 50 && math > 50) {
      return '보충 수업 없음';
    }
    return '단과반';
  }
}

// 2번 : 윤년확인
function solution2(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      }
      return false;
    }
    return true;
  }
  return false;
}
