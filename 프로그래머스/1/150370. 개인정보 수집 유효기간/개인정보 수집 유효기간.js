function solution(today, terms, privacies) {
    const pri = []
    const answer = []
    const infoTerms = {}
    
    // 등급 및 개월 수 객체 생성
    terms.forEach((data) => {
        const [grade, period] = data.split(" ")
        infoTerms[grade] = parseInt(period)
    })
    
    // 수집일자 변환
    const changeDay = (day) => {
        const [year, month, date] = day.split(".")
        let total = (parseInt(year) * 12 * 28) + (parseInt(month) * 28) + parseInt(date)
        return total
    }
    
     // 현재날짜 변환
    today = changeDay(today)
    
    // 개인정보 분류 및 계산 실행
    privacies.forEach((data) => {
        let [day, grade] = data.split(" ")
        day = changeDay(day) + (infoTerms[grade] * 28) - 1
        pri.push(day)
    })
    
    // 기한초과
    pri.forEach((data, index) => {
        if(data < today) {
            answer.push(index + 1)
        }
    })
    
    return answer
}