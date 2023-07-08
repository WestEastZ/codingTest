function solution(n) {
  let answer = 0;

  for (let i = 0; i < n; i++) {
    if (n % i == 1) {
      return (answer = i);
    }
  }
}

// 나머지가 1이되는 가장 작은 수 찾기
