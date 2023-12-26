function solution(n) {
       let first = 0
       let second = 1
       let cur = 0
    
   for(let i = 2; i<=n; i++) {
    
       cur = (first + second) % 1234567
       
       first = second
       second = cur
   }
    
    return cur
}