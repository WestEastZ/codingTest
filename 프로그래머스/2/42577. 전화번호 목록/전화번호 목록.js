function solution(phone_book) {
    const map = new Map()
    
    phone_book.forEach((data, index) => {
        map.set(data, data)    
    })
    
    
    for(let data of map.keys()) {
        for(let i = 1; i<data.length; i++) {
            const prev = data.slice(0, i)
            if(map.has(prev)) return false
        }        
    }
    
    return true
}