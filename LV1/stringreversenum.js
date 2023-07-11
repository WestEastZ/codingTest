function solution(n) {
  let arr = n.toString().split("");
  let answer = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    answer.push(Number(arr[i]));
  }

  return answer;
}

//자연수 뒤집어 배열로 만들기
