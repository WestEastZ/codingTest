
function solution(left, right) {
    let answer = 0;
    for(let num=left;num<=right;num++){
        const isSqrtNumberExist = Number.isInteger(Math.sqrt(num))
       
        answer += (isSqrtNumberExist ? -1 : 1) * num
    }
    return answer
}