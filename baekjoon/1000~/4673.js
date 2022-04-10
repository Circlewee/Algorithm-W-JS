// silver 5 - 구현

'use strict';
const arr = new Array(10001).fill(0);
let result = '';

for (let i = 1; i < arr.length; i++) {
  let sum = i;
  let str_i = String(i);

  for (let j = 0; j < str_i.length; j++) {
    sum += Number(str_i[j]);
  }
  if (sum <= 10000) {
    arr[sum] = 1;
  }
}

for (let i = 1; i < arr.length; i++) {
  if (arr[i] === 0) {
    result += i + '\n';
  }
}
console.log(result);
