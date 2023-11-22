function solution(N, stages) {
    // 실패율
    const info = [] 
    const sortStages = stages.sort((a,b) => a - b)
    // 1,2,2,2,3,3,4,6
    
    for(let i = 1; i<=N; i++) {
        // 클리어하지 못한 플레이어 수
        const failUser = sortStages.filter((num) => num === i).length
        // 도달한 플레이어 수
        const tryUser = stages.filter((num) => num >= i).length
        
        // 스테이지 별 실패율
     
        info.push(failUser/tryUser)
    }
    
    const indexInfo = info.map((value, index) => ({value, index}))
    const indexedArr = indexInfo.sort((a,b) => b.value - a.value || a.index - b.index)
  
    
    let resultArr = indexedArr.map(obj => {
        return obj.index + 1
    })
    
    console.log(resultArr)
    
    return resultArr
    
    
   
    // 객체 키로 stages가 들어가고 filter로 나온 갯수를 값으로 넣어준다.
    // 키가 이미 있으면 하지 않는다.
//     stages.forEach((data,index) => {
      
//         if(!stageFail[data]) {
//             // 완료한 플레이어는 제외
//             if(data<=N){
//                 // 클리어하지 못한 플레이어 수
//                 const failUser = stages.filter((num) => num === data).length
//                 // 스테이지에 도달한 플레이어 수
//                 const tryUser = stages.filter((num) => num >= data).length
//                 // 실패율
//                 stageFail[data] = failUser / tryUser
//             }
//         }
        
        
//     })
    
}