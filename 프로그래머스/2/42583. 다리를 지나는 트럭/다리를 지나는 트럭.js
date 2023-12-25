function solution(bridge_length, weight, truck_weights) {
    let crossing =  new Array(bridge_length).fill(0)
    let timer = 0
    let crossingWeight = 0
    
    
    while(truck_weights.length > 0) {
        timer++       
        crossingWeight -= crossing.shift()
        
        // 무게 초과
        if(crossingWeight + truck_weights[0] > weight) {
            crossing.push(0)
         
        // 무게 가능    
        } else {
          const on = truck_weights.shift()
          crossing.push(on)
          crossingWeight += on
        }
    }
    return timer + bridge_length
}
    
    // 00 07 70 04 45 50 06 60 00
    // 7456 456 456 56 6 6 x x x 