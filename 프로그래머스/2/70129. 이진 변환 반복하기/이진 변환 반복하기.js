function solution(s) {
    
    const answer = []
    let count = 0
    let zero = 0
   
   
    while(s.length > 1) {
        let before = s.length
        let after = s.replaceAll("0", "").length
        zero += before - after
        count++
        
        s = after.toString(2)
    }
    
    
    answer.push(count, zero)
    return answer
}

