function solution(arr){
   let answer = []
    
 for(let i = 0; i<arr.length; i++) {
    if(arr[i] !== arr[i-1]) {
        answer.push(arr[i])
        }
    }
    return answer
}


// un 1 1 3 3 0 1 1 
// -1 0 1 2 3 4 5 6

// 1 3 0 1 