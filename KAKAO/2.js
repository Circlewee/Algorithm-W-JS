function solution(queue1, queue2) {
  let sumQ1 = queueElementSum(queue1);
  let sumQ2 = queueElementSum(queue2);
  const target = (sumQ1 + sumQ2) / 2;
  let result = 0;
  let start = 0;
  let end = queue1.length;

  for (let i = 0; i < end; i++) {
    if (target < queue1[i] || target < queue2[i]) {
      return -1;
    }
  }

  let element;
  while (sumQ1 !== sumQ2) {
    if (sumQ1 < sumQ2) {
      element = queue2[end];
      end--;
      queue1.push(element);
      sumQ1 += element;
      sumQ2 -= element;
    } else if (sumQ1 > sumQ2) {
      element = queue1[start];
      start++;
      queue2.push(element);
      sumQ1 -= element;
      sumQ2 += element;
    }
    result++;
  }

  return result;
}

function queueElementSum(queue) {
  return queue.reduce((sum, value) => (sum += value), 0);
}

let q1 = [1, 1, 2, 2];
let q2 = [1, 10, 2, 1];
console.log(solution(q1, q2));
