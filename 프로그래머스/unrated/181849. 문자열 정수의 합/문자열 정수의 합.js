function solution(num_str) {
    let sum = 0
    let arr = num_str.split("")
    
    for(let i = 0; i<arr.length; i++) {
        sum += parseInt(arr[i])
}
    return sum
    
}