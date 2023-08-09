function solution(t, p) {
    let count =0;
  
    for(let i=0; i<= t.length - p.length; i++) {
    let toSlice = parseInt(t.slice(i,i + p.length))
    let toNumber = parseInt(p)
    
    // console.log(toSlice)
    // console.log(toNumber)
    
    if(toSlice <= toNumber ) {
        count++
    }
        
        
}
    return count
}