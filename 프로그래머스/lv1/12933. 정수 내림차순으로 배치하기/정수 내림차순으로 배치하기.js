function solution(n) {
   let toNum = (e) => parseInt(e)
   
   let arr =  n.toString().split("").map(toNum).sort((a, b) => b - a);
   
   
   return parseInt(arr.join(''))
}