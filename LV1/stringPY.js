function solution(s) {
  let arr = s.toLowerCase();
  let pCounter = 0;
  let yCounter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "p") {
      pCounter++;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "y") {
      yCounter++;
    }
  }
  return pCounter == yCounter ? true : false;
}

// 문자열 내 p와 y의 개수
