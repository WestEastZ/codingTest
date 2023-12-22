function solution(n,a,b){

    let answer = 0
    while(a !== b) {
        a = Math.ceil(a/2)
        console.log(a)
        b = Math.ceil(b/2)
        answer++
    }
    return answer
}

