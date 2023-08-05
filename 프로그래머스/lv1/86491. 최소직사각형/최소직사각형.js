function solution(sizes) {
    
  let answer = [];
  let maxArr = [];
  let minArr = [];

    
  for(let i = 0; i<sizes.length; i++) {
      let max = Math.max(...sizes[i])
      let min = Math.min(...sizes[i])
      maxArr.push(max)
      minArr.push(min)
   }
    return Math.max(...maxArr) * Math.max(...minArr)
}