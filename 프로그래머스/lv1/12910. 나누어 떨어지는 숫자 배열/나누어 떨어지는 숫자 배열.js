function solution(arr, divisor) { 
    let answer = arr.filter(num => num%divisor == 0)
    console.log(answer)
    return answer.length == 0 ? [-1] :
           answer.sort((a,b) => a-b ) 
    
    
      
//   let answer = [];

    
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] % divisor == 0) {
//       answer.push(arr[i]);
//     } 
//   }

//     if (answer.length == 0) {
//       answer.push(-1);
//     }
    
    
//     return answer.sort((a,b) => a - b )
}


