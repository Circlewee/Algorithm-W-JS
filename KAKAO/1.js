function solution(survey, choices) {
  const score = {
    1: 3,
    2: 2,
    3: 1,
    4: 0,
    5: 1,
    6: 2,
    7: 3,
  };
  const typeScore = {
    RT: {
      R: 0,
      T: 0,
    },
    CF: {
      C: 0,
      F: 0,
    },
    JM: {
      J: 0,
      M: 0,
    },
    AN: {
      A: 0,
      N: 0,
    },
  };

  for (let i = 0; i < survey.length; i++) {
    let [type1, type2] = survey[i].split('');
    let choice = choices[i];
    let flag = type1 < type2;

    if (choice > 4) {
      if (flag) {
        typeScore[type1 + type2][type2] += score[choice];
      } else if (!flag) {
        typeScore[type2 + type1][type2] += score[choice];
      }
    } else if (choice < 4) {
      if (flag) {
        typeScore[type1 + type2][type1] += score[choice];
      } else if (!flag) {
        typeScore[type2 + type1][type1] += score[choice];
      }
    }
  }

  const result = Object.entries(typeScore).reduce((acc, [key, values]) => {
    const keys = key.split('');
    if (values[keys[0]] < values[keys[1]]) {
      acc += keys[1];
    } else {
      acc += keys[0];
    }
    return acc;
  }, '');

  return result;
}

const survey = ['TR', 'RT', 'TR'];
const choices = [7, 1, 3];
let result = solution(survey, choices);
console.log(result);
