function solution(numbers) {
  let newArray = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      newArray.push(numbers[i] + numbers[j]);
      newArray.sort((a, b) => a - b);
    }
  }
  const setArray = new Set(newArray);
  const answer = [...setArray];
  return answer;
}

// numbers.forEach((v, i) => {
//     numbers.forEach((v2, i2) => {
//         if (i !== i2) newArray.push(v + v2);
//     })
// })

//Set을 쓰면 중복을 제거한다. 이를 이용해보자.
