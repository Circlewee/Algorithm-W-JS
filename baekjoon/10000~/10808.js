// bronze 2 - 구현
'use strict';

const input = require('fs')
  .readFileSync('baekjoon/10000~/10808.txt')
  .toString();
let count = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
  count[input.charCodeAt(i) - 97] += 1;
}

const result = count.join(' ');
console.log(result);
