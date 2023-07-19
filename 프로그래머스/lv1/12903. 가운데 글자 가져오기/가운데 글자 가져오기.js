function solution(s) {
    var answer;
    
    let arr = s.split("")
    
    for(let i = 0; i<=s.length-1; i++) {
      if(s.length%2 != 0) {
       return s[parseInt(s.length/2)]
    } else if(s.length%2 == 0) {
       return s[s.length/2 -1]+s[s.length/2]
    }
  }
}
    
    
