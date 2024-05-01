function solution(rc, operations) {
  let result = rc;

  for (const operation of operations) {
    switch (operation) {
      case 'ShiftRow':
        result = shiftRow(result);
        break;
      case 'Rotate':
        result = rotate(result);
        break;
    }
  }

  return result;
}

function shiftRow(rc) {
  const result = rc;
  const pop = rc.pop();
  result.unshift(pop);

  return result;
}

function rotate(rc) {
  const result = JSON.parse(JSON.stringify(rc));
  const rength = rc.length;

  for (let i = 0; i < rength; i++) {
    if (i === 0) {
      result[i].unshift(rc[i + 1][0]);
      result[i].pop();
    } else if (i === rength - 1) {
      result[i].push(rc[i - 1][rc[i - 1].length - 1]);
      result[i].shift();
    } else {
      result[i].pop();
      result[i].shift();
      result[i].push(rc[i - 1][rc[i - 1].length - 1]);
      result[i].unshift(rc[i + 1][0]);
    }
  }
  return result;
}

const rc = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
const operations = ['ShiftRow', 'Rotate', 'ShiftRow', 'Rotate'];
let result = solution(rc, operations);
console.log(result);
