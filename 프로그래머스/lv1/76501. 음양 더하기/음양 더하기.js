function solution(absolutes, signs) {
  let answer = 0;

  for (let i = 0; i < signs.length; i++) {
    if (signs[i] == true) {
      answer += absolutes[i];
    } else {
      answer += absolutes[i] * -1;
    }
  }
    
    return answer
}


//  return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);