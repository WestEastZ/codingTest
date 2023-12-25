function solution(priorities, location) {
    let arr = priorities.map((data, index) => [data, index])
    let complate = []
    let answer = 0
    
    

    while(arr.length > 0) {
        // 현재 값
        let cur = arr.shift()
        
        // 1개 남으면 종료
        if(arr.length === 0) {
            complate.push(cur)
            break
        }
        
        // 남은 값 중 최대 값
        let max = Math.max(...arr.map((data) => data[0]))
        
        // 작업 순서대로 재정렬
        if(cur[0] < max) {
            arr.push(cur)
        } else if (cur[0] >= max) {
            complate.push(cur)
        } 
    }
    
     complate.forEach((data, index) => {
        if(data[1] === location) {
            answer = index + 1 
        }
    })
    
    return answer
    
}