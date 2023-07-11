function solution(n) {
  let x = Math.sqrt(n);

  if (x % 1 === 0) {
    return Math.pow(x + 1, 2);
  } else {
    return -1;
  }
}

// 정수 제곱근 판별
