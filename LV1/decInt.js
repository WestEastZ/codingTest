function solution(n) {
  let toNum = (e) => parseInt(e);
  let arr = n.toString().split("").map(toNum);
  let decArr = arr.sort((a, b) => b - a);

  return parseInt(decArr.join(""));
}

// 정수 내림차순으로 배치하기
