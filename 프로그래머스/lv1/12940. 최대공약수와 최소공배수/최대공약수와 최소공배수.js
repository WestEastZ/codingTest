function solution(n, m) {
    
    var minnum = Math.min(n,m)
    
    let gcd;
    
    for(let i = 0; i<=minnum; i++ ){
        if(n%i == 0 && m%i == 0)
            gcd = i
}
     
    let lcm = n * m / gcd;
    return [gcd, lcm];
}