function solution(record) {
  const message = [];
  let userInfo = {};

  const splitRecord = record.map((item) => {
    return item.split(" ");
  });

  // user 정보 생성
  for (let i = 0; i < splitRecord.length; i++) {
    // 들어왔을 때
    if (splitRecord[i][0] === "Enter") {
        if(!userInfo[splitRecord[i][1]]) {
            userInfo[splitRecord[i][1]] = splitRecord[i][2];
        } else if (userInfo[splitRecord[i][1]]) {
            userInfo[splitRecord[i][1]] = splitRecord[i][2];
        }
    // 닉네임 변경 시 
    } else if(splitRecord[i][0] === "Change") {
        userInfo[splitRecord[i][1]] = splitRecord[i][2];
    }
  }
    splitRecord.forEach((item) => {
        if(item[0] === "Enter") {
            message.push(`${userInfo[item[1]]}님이 들어왔습니다.`)
        } else if(item[0] === "Leave") {
            message.push(`${userInfo[item[1]]}님이 나갔습니다.`)
        }
    })
    
    return message;

}

     // // 새로운 유저일 때
      // if (!userInfo[splitRecord[i][1]]) {
      //   userInfo[splitRecord[i][1]] = splitRecord[i][2];
      //     // 기존 유저일 때
      // } else if(userInfo[splitRecord[i][1]]) {
      //     userInfo[splitRecord[i][1]] = splitRecord[i][2]
      // }