function solution(answers) {
    const answer1 = [1, 2, 3, 4, 5]
    const answer2 = [2, 1, 2, 3, 2, 4, 2, 5]
    const answer3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    let count = [0, 0, 0]
    
    answers.forEach((item, index) => {
    
    if( answers[index] === answer1[index%answer1.length]) {
        count[0] += 1
    } 
    
    if(answers[index] === answer2[index%answer2.length]) {
        count[1] += 1
    }
        
    if(answers[index] === answer3[index%answer3.length]) {
        count[2] += 1
    }  
  })
 const maxValue = Math.max(...count)
 
 return count.map((item, index) => {
    if(item === maxValue) {
    return index+1
    } 
    }).filter((item) => item)
}