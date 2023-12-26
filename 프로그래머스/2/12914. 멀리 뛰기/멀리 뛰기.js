function solution(n) {
    // 피보나치 수열
    // n-1 + n-2 = n
    // 1 1 3 5 8 13 21
    
    let first = 0
    let second = 1
    let cur = 0

  
        for(let i = 1; i<=n; i++) {
            cur = (first + second) % 1234567
            
            first = second
            second = cur
        }
        
        return cur
    }
    
    