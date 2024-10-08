function solution(nums) {
    const n = nums.length / 2 ;
    const arr = []
    
    nums.forEach((value, index) => {
        if(index === 0) {
            arr.push(value)
        } else if(!arr.includes(value)) {
            arr.push(value)
        }
    })
    
    // 2, 2
    // 3, 3 
    // 3, 2
    
    return n > arr.length ? arr.length : n
}