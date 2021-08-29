// for
function solution1(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// while
function solution2(n) {
  let result = 1;
  while (n !== 0) {
    result *= n;
    n--;
  }
  return result;
}

// recursive
function solution3(n) {
  if (n === 0) return 1;
  return n * solution3(n - 1);
}
