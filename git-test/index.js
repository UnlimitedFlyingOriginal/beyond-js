function getRandom(n) {
  return Math.floor(Math.random() * n);
}

const randomBox = Array.from({ length: 10 }, (_, i) => i + 1).map((n) => getRandom(n));
console.log(randomBox);
