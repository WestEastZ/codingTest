function solution(n) {
  var answer = 0;
  let x = parseInt(Math.sqrt(n));

  if (Math.pow(x, 2) == n) {
    return Math.pow((x + 1), 2);
  } else {
    return -1;
  }
  return answer;
}