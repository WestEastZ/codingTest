function solution(survey, choices) {
  // [RT, CF, JM, AN] 4가지 지표
  const answer = []
  const mbti = [
    ["R", 0],
    ["T", 0],
    ["C", 0],
    ["F", 0],
    ["J", 0],
    ["M", 0],
    ["A", 0],
    ["N", 0],
  ];
  const scroe = {
    1: 3,
    2: 2,
    3: 1,
    4: 0,
    5: 1,
    6: 2,
    7: 3,
  };

  survey.forEach((data, index) => {
    const [front, end] = data.split("");

    // 선택이 4(모르겠음) 초과면 End 성격유형에 점수를 넣는다
    if (choices[index] > 4) {
      for (let i = 0; i < mbti.length; i++) {
        if (mbti[i][0] === end) {
          mbti[i][1] += scroe[choices[index].toString()];
        }
      }
      // 선택이 4(모르겠음) 미만이면 Front 성격유형에 점수를 넣는다
    } else if (choices[index] < 4) {
      for (let i = 0; i < mbti.length; i++) {
        if (mbti[i][0] === front) {
          mbti[i][1] += scroe[choices[index].toString()];
        }
      }
    }
  });
    
    for(let i = 0; i<mbti.length; i+=2) {
        if(mbti[i][1] >= mbti[i+1][1]) {
            answer.push(mbti[i][0]) 
        } else if(mbti[i][1] < mbti[i+1][1]) {
            answer.push(mbti[i+1][0])
        }
    }


  return answer.join("")
}
