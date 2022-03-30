// bronze 1 - 구현
'use strict';

const input = require('fs')
  .readFileSync('baekjoon/1000~/1259.txt')
  .toString()
  .split('\n');

const arr = input.filter((e) => e !== '0'); // 개행문자 포함
let result = '';
let palindrome = '';

arr.forEach((e) => {
  const str = e.slice(0, -1);

  for (let i = str.length - 1; i >= 0; i--) {
    palindrome += str.charAt(i);
  }

  result += str === palindrome ? 'yes\n' : 'no\n';
  palindrome = '';
});

console.log(result.slice(0, -1));
