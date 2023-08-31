function solution(k, m, score) {
  let sortScore = score.sort((a, b) => b - a);
  let index = 0;
  let sum = 0;
  for (let i = 0; i < score.length; i++) {
    let arr = sortScore.slice(index, m + index);
    let min = Math.min(...arr);

    if (arr.length === m) {
      sum += min * m;
    }

    index += m;
  }
  return sum;
}
