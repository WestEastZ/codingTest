function solution(s){
    let stack = 0

    for(let i=0; i<s.length; i++) {
     s[i] === "(" ? stack++ : stack--      
        
     if(stack < 0) return false // )가 먼저 나온 경우
    }
    
    return stack === 0 ? true : false // )가 덜 나온 경우 
}

