function solution(n) {
  return n
    .toString()
    .split("")
    .map((v) => parseInt(v))
    .reduce((acc, cur) => acc + cur, 0);

  // .reduce((acc, cur) => acc+cur)

  //     let answer = 0;
  //     n = n.toString()

  //     for(let i=0; i < n.length; i++) {
  //         answer += parseInt(n[i]);
  // }
  //     return answer
}




