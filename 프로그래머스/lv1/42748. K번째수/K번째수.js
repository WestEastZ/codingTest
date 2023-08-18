function solution(array, commands) {
 let newArray = []
  commands.map((v) => {
      let i = v[0]
      let j = v[1]
      let k = v[2]
      
      newArray.push(array.slice(i-1, j).sort((a,b) => a - b)[k-1])
    })
    
    return newArray
}