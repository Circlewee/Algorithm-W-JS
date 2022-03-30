// bronze 3 - 구현
'use strict';

const input = Number(
  require('fs').readFileSync('baekjoon/1000~/2523.txt').toString()
);

let result = '';
const length = input * 2 - 1;

for (let i = 0; i < length; i++) {
  if (i < Math.ceil(length / 2)) {
    result += '*'.repeat(i + 1) + '\n';
  } else {
    result += '*'.repeat(length - i) + '\n';
  }
}

console.log(result);
