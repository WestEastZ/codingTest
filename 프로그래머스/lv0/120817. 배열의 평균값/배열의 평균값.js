function solution(numbers) {
   
    let answer = numbers.reduce((acc, cur) => acc+cur) / numbers.length
    
    return answer
}

