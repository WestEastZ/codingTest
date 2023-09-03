function solution(k, score) {
  let answer = [];
  let arrKing = [];

  score.forEach((v) => {
    arrKing.push(v);
    arrKing.sort((a, b) => b - a);

    if (arrKing.length > k) {
      arrKing.pop();
    }
    answer.push(arrKing[arrKing.length - 1]);
  });

  return answer;
}