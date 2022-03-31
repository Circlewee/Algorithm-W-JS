const [num, ...input] = require('fs')
  .readFileSync('baekjoon/1000~/1316.txt')
  .toString()
  .trim()
  .split('\n');

const result = new Array(parseInt(num)).fill(true);

for (let i = 0; i < parseInt(num); i++) {
  const str = input[i];
  const arr = [];

  for (let j = 0; j < str.length; j++) {}
}
