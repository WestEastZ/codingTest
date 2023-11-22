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
    
    // 실패율, 스테이지 객체 생성
    const indexInfo = info.map((value, index) => ({value, index}))
    
    // 실패율 내림차순, 스테이지 오름차순 정렬
    const indexedArr = indexInfo.sort((a,b) => b.value - a.value).map(obj => {
        return obj.index + 1
    })
  
    
    return indexedArr
}