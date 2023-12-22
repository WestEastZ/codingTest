function solution(brown, yellow) {
    const size = brown + yellow
    const answer = []
    
    
    for(let i = 0; i <= size/2; i++){
        for(let j = 0; j <= size/2; j++) {
            if(i >= j && i * j === size && (i-2)*(j-2) === yellow) {
                answer.push(i, j)
                return answer
            }
        }
    } 
}