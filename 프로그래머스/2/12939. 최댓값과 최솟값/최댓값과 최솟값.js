function solution(s) {
   let arr =  s.split(' ')
   arr = arr.map((item) => parseInt(item))
   
    const max = Math.max(...arr)
    const min = Math.min(...arr)
    return `${min} ${max}`
}
