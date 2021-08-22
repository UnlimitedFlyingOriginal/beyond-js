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
