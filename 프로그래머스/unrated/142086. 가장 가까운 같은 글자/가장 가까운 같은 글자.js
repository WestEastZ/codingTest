function solution(s) {
  let array = [];
  let answer = [];

  [...s].forEach((v) => {
    if (!array.includes(v)) {
      answer.push(-1);
    }

    if (array.includes(v)) {
      answer.push(array.length - array.lastIndexOf(v));
    }

    array.push(v);
  });

  return answer;
}
