function solution(array, n) {
    let counte = 0;
    
    for(let i = 0; i<=array.length-1; i++)
    if(array[i] == n) {
    counte++
}
    return counte
}