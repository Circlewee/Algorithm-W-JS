function solution(string) {
    const numObj = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
    };
    let answer = '';
    let cache = '';
    const strArr = string.split('');
    for (e of strArr) {
        if (!isNaN(e)) {
            answer += e;
            continue;
        }
        cache += e;
        if (numObj.hasOwnProperty(cache)) {
            answer += numObj[cache];
            cache = '';
        }
    }

    return Number(answer);
}

// function solution(s) {
//     let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
//     var answer = s;

//     for (let i = 0; i < numbers.length; i++) {
//         let arr = answer.split(numbers[i]);
//         answer = arr.join(i);
//     }

//     return Number(answer);
// }

const s1 = 'one4seveneight';
const s2 = '23four5six7';
const s3 = '2three45sixseven';
const s4 = '123';

console.log(solution(s1));
console.log(solution(s2));
console.log(solution(s3));
console.log(solution(s4));
