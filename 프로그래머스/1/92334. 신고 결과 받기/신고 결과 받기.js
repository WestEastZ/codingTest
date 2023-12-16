function solution(id_list, report, k) {
    // 신고받은 내역
    const info = {}
    // 신고한 내역
    const reportInfo = {}
    // 게시글 정지
    const out = []
    const answer = []
    
    // 객체 생성
    id_list.forEach((data)=> {
        info[data] = []
        reportInfo[data] = []
    })
    
    // 분류
    report.forEach((data) => {
        const [singo, psingo] = data.split(' ')
        info[psingo].push(singo)
        reportInfo[singo].push(psingo)
    })
    
    // 게시글이 정지된 사람
    for(const key in info) {
      info[key] = [...new Set(info[key])]
      if(info[key].length >= k) {
          out.push(key)
      }
    }
    
    // 게시글이 정지된 사용자를 얼마나 신고했는지 확인
    for(const key in reportInfo) {
        reportInfo[key] = [...new Set(reportInfo[key])]
        let cun = 0
        reportInfo[key].forEach((data) => {
            if(out.includes(data)) {
                cun++
            }
        })
        answer.push(cun)
    }
    
    return answer
}