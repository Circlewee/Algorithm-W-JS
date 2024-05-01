function solution(n, plans, clients) {
  const answer = Array(clients.length).fill(0);
  const planObject = {};
  let allService = [];

  plans.forEach((plan) => {
    const [data, ...service] = plan.split(' ');

    allService = [...allService, ...service];
    planObject[data] = allService.join('');
  });

  const planKeys = Object.keys(planObject);

  for (let i = 0; i < clients.length; i++) {
    const [data, ...service] = clients[i].split(' ');
    const flag = service.every((value) => value <= n);

    if (!flag) {
      continue;
    }

    for (let j = 0; j < planKeys.length; j++) {
      const key = planKeys[j];

      if (data <= parseInt(key, 10)) {
        let flag = true;
        const planList = planObject[key];

        service.forEach((e) => {
          flag = planList.includes(String(e)) && flag;
        });

        if (flag) {
          answer[i] = j + 1;
          break;
        }
      }
    }
  }

  return answer;
}

const n = 5;
const plans = ['100 1 3', '500 4', '2000 5'];
const clients = ['300 3 5', '1500 1', '100 1 3', '50 1 2'];

console.log(solution(n, plans, clients));
