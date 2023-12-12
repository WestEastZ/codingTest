function solution(new_id) {
    
    
    
      let id = new_id.toLowerCase() // 1
            .replace(/[^a-z0-9\-_.]/g, '') // 2 
            .replace(/[.]{2,}/g, ".") // 3
            .replace(/^[.]+|[.]+$/g, "") // 4
            
            // 5
            if(!id) {
                id = "a"
            }
            
            // 6
            if(id.length >= 16) {
                id = id.substr(0, 15)
                    .replace(/[.]+$/,"")
            }
    
            // 7
            while(id.length < 3) {
                id += id.at(-1)
            }
                  
    return id
}