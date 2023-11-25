function solution(files) {
    return files.sort((a,b) => {
        // ^x x가 시작됨을 의미 
        // \D 숫자가 아닌 문자를 의미
        // + 반복을 의미
        const aHead = a.match(/^\D+/)[0].toLowerCase()
        const bHead = b.match(/^\D+/)[0].toLowerCase()
        
        // 헤드 부분을 정렬
        if(aHead > bHead) return 1
        if(aHead < bHead) return -1
        
        // \d 숫자를 의미
        // ^0 0으로 시작됨을 의미
        // 0으로 시작되는 것을 공백으로 변경
        const aNum = a.match(/\d+/)[0].replace(/^0+/, '')
        const bNum = b.match(/\d+/)[0].replace(/^0+/, '')
        
        // 숫자 부분을 정렬
        return aNum - bNum
    })
}