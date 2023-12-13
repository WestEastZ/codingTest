function solution(participant, completion) {
    let answer = '';
    const participantMap = new Map()
    const completionMap = new Map()
    
    // 참석 인원 명단
    participant.forEach((data) => {
        if(!participantMap.get(data)) {
            participantMap.set(data, 1)
        } else {
            participantMap.set(data, participantMap.get(data) + 1) 
        }
    })
    
    // 완료 인원 명단
    completion.forEach((data) => {
          if(!completionMap.get(data)) {
            completionMap.set(data, 1)
        } else {
            completionMap.set(data, completionMap.get(data) + 1)
        }
    })
    
    // 미완료 인원 탐색
    participant.forEach((data) => {
        if(participantMap.get(data) !== completionMap.get(data) || completionMap.has(data) === false) {
            answer = data
        }
    })

 
    return answer
}