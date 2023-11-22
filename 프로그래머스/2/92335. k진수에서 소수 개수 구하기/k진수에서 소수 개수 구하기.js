function solution(n, k) {
    
    const binary = parseInt(n,10)
        .toString(k).split(0)
        .filter((data) => {
           return data != 1 && data != ''
        })
    
    binary.forEach((data) => {
        for(let i = 2; i<=parseInt(Math.sqrt(data)); i++) {
            if(data % i === 0 ) {
                binary.shift()
            }
        }
    })
    
    return binary.length
}