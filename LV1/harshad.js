function solution(x) {
  let toNum = (e) => parseInt(e);
  let arr = x.toString().split("").map(toNum);
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return x % sum === 0 ? true : false;
}

// 하샤드 수
