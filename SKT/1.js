// function solution(p) {
//   const answer = Array(p.length).fill(0);
//   let copyArray = [...p];
//   let left = 0;
//   let changedIndex = null;
//   let lastMin = 0;

//   while (true) {
//     let min = copyArray.length + 1;

//     for (let i = 0; i < copyArray.length; i++) {
//       if (copyArray[i] < min && copyArray[i] > lastMin) {
//         min = copyArray[i];
//         changedIndex = i;
//       }
//     }
//     lastMin = min;

//     for (; left < copyArray.length; left++) {
//       if (changedIndex === left && copyArray[changedIndex] === copyArray[left]) {
//         left++;
//         break;
//       }
//       if (lastMin < copyArray[left]) {
//         const e = copyArray[left];
//         copyArray.splice(left, 1, lastMin);
//         copyArray.splice(changedIndex, 1, e);

//         answer[left] += 1;
//         answer[changedIndex] += 1;
//         break;
//       }
//     }

//     if (left === copyArray.length) {
//       break;
//     }
//   }

//   return answer;
// }

// // 1, 1, 1, 3, 0
// const p = [2, 5, 3, 1, 4];
// console.log(solution(p));
const a = [
  { id: 1, name: 'Logestyx' },
  { id: 2, name: 'Logest' },
];
const b = [
  { id: 1, name: 'Logestyx' },
  { id: 3, name: 'Logestyyyyyy' },
];

const type = {
  $$typeof: 'div',
};

// prettier-ignore
const dd = !!true;
const c = [...a, ...b];

console.log(type);
