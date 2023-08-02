function solution(d, budget) {
  let answer = 0;
  const acc = d.sort((a, b) => a - b);
  let sum = 0;

  for (let i = 0; i < acc.length; i++) {
        sum += acc[i]
    if (sum <= budget) {
        answer++
    } 
    }
    return answer
  }

