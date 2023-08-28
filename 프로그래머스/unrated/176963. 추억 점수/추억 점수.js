function solution(name, yearning, photo) {
  var answer = [];
  let sum = 0;

  // Map으로 객체 생성
  //     for(let i =0; i<name.length; i++) {
  //     nameMap.set(name[i], yearning[i])
  // }
  // photo에 키가 있으면 값만큼 누적된 값을 answer에 push

  for (let i = 0; i < photo.length; i++) {
      sum = 0;
    for (let j = 0; j < name.length; j++) {
      if (photo[i].includes(name[j])) {
          sum += yearning[j]
      }
        
    }
      answer.push(sum)
  }
    return answer
}

