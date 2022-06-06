// 오픈 채팅방(https://programmers.co.kr/learn/courses/30/lessons/42888)

function solution(record) {
  // record를 순회하면서 uuid: key, (status: enter or leave, name: string)
  const name = {};
  const answer = [];

  record.forEach((message) => {
    const [status, id, nickName] = message.split(' ');
    if (status !== 'Leave') {
      name[id] = nickName;
    }
  });
  record.forEach((message) => {
    const [status, id, ...rest] = message.split(' ');
    if (status === 'Enter') {
      answer.push(`${name[id]}님이 들어왔습니다.`);
    } else if (status === 'Leave') {
      answer.push(`${name[id]}님이 나갔습니다.`);
    }
  });
  return answer;
}

const record = [
  'Enter uid1234 Muzi',
  'Enter uid4567 Prodo',
  'Leave uid1234',
  'Enter uid1234 Prodo',
  'Change uid4567 Ryan',
];

console.log(solution(record));
