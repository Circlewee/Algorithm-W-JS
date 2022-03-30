// bronze 3 - 구현
'use strict';

const input = require('fs')
  .readFileSync('baekjoon/10000~/15552.txt')
  .toString()
  .split('\n');
const count = input[0];
let result = '';
let num;

for (let i = 1; i <= count; i++) {
  num = input[i].split(' ');
  result += Number(num[0]) + Number(num[1]) + '\n';
}
console.log(result);
