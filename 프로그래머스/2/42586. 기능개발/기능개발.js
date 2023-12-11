function solution(progresses, speeds) {
    const answer = []
    const day = []
    let cnt = 1
    
    // 작업 일수
    progresses.forEach((data, index) => {
        let count = 0
        while(data < 100) {
            data += speeds[index]
            count++
        }
        day.push(count)
    })
    
    // 현재
    let max = day[0]
    
    for(let i = 1; i<day.length; i++) {
        
        if(max >= day[i]) {
            cnt++
        } else {
            max = day[i]
            answer.push(cnt)
            cnt = 1
        }
    }
    
    answer.push(cnt)
     
    return answer

}