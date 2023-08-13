function solution(x) {
  let sum = 0;
  const tosplit = x
    .toString()
    .split("")
    .map((item) => parseInt(item));

  for (let i = 0; i < tosplit.length; i++) {
    sum += tosplit[i];
  }

  return x % sum === 0 ? true : false;
}