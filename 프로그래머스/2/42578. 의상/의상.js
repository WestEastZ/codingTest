function solution(clothes) {
    
   // (1+a)(1+b)(1+c)
    const obj = {}
    let num = 1
    
    clothes.forEach((data) => {
        let [clothes, type] = [...data]
        obj[type] ? obj[type] = obj[type] + 1 : obj[type] =  1
    })
    
    for(let key in obj) {
        num = num * (obj[key] + 1 )   
    }
    
    return num - 1
}