function solution(fees, records) {
    const result = []
    const maxTime = 23 * 60 +59
    const infoCar = {}
    const infoFee = []
    const [basicTime, basicFee, perTime, perFee] = fees
    
    // 요금 계산 함수
    const pay = (time) => {
        // 기본 시간 미만
        if(time < basicTime) return basicFee
        // 기본 시간 초과        
        const overTime = time - basicTime
        const overPay = basicFee + Math.ceil(overTime / perTime) * perFee
        return overPay
    }
    
    // 시간 계산 함수
    const calTime = (time) => {
        const [HH, MM] = time.split(":")
        return parseInt(HH) * 60 + parseInt(MM)
    }

    // 입출차 기록 객체 생성
    records.forEach((data) => {
        const [time, number, status] = data.split(" ")
        const caltime = calTime(time)
                                
        // 기존기록 확인
        if(!infoCar[number]) {
            infoCar[number] = {inTime : 0, accTime : 0, remain : false}
        }
        // 입차
        if(status === "IN") {
         infoCar[number] = {inTime : parseInt(caltime), accTime : infoCar[number].accTime, remain : true}
        // 출차
        } else {
         infoCar[number].accTime += parseInt(caltime) - infoCar[number].inTime
         infoCar[number].remain = false
        }
    })
    
    // 출차하지 않은 차량 조회 후 23:59 기준 출차 요금 반영
    for(const number in infoCar) {
        if(infoCar[number].remain) {
            infoCar[number].accTime += maxTime - infoCar[number].inTime
        }
        
        infoFee.push([number, pay(infoCar[number].accTime)])
    }
    
    // 차량번호 순 정렬
    infoFee.sort((a, b) => a[0] - b[0]).forEach((data) => {
        result.push(data[1])
    })
  
    return result
}