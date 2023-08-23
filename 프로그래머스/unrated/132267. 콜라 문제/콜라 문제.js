function solution(a, b, n) {
    let answer = 0;
    
    while(n >= a) {
    answer += parseInt(n/a) * b; // answer 새콜라
    n = n % a + parseInt(n/a) * b;
}
    
    return answer
}