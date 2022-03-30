// bronze 1 - 구현
'use strict';

const input = Number(
  require('fs').readFileSync('baekjoon/1000~/1110.txt').toString()
);

let n = input;
let count = 0;

do {
  n = (n % 10) * 10 + ((parseInt(n / 10, 10) + (n % 10)) % 10);
  count++;
} while (input !== n);

console.log(count);
