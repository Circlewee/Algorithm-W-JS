// bronze 1 - 구현
'use strict';

const input = require('fs')
  .readFileSync('baekjoon/1000~/1259.txt')
  .toString()
  .split('\n');

const arr = input.filter((e) => e !== '0');

arr.forEach((e) => {
  let reverse = e.split('').reverse().join('');
  console.log(reverse.trim() === e.trim() ? 'yes' : 'no');
});

// vscode 환경에선 오히려 아래 결과가 no no no가 나온다. 그런데 백준에선 아래만 정답
const input2 = require('fs')
  .readFileSync('baekjoon/1000~/1259.txt')
  .toString()
  .trim()
  .split('\n');

const arr2 = input2.filter((e) => e !== '0');

arr2.forEach((e) => {
  let reverse = e.split('').reverse().join('');
  console.log(reverse === e ? 'yes' : 'no'); //  reverse == "\r" + somthing", e == "somthing" + "\r"
});
