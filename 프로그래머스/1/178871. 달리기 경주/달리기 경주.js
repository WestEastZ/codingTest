function solution(players, callings) {
    var answer = [];
    let playerObj = {}
    let rankObj = {}
    
    players.forEach((data, index) => {
        playerObj[data] = index
        rankObj[index] = data
    })
    
    callings.forEach((data) => {
        let frontPlayer = rankObj[playerObj[data] - 1]
        
        // 선수 객체 업데이트
        playerObj[data] = playerObj[data] - 1
        playerObj[frontPlayer] = playerObj[frontPlayer] + 1
        
        // 등수 객체 업데이트
        rankObj[playerObj[data]] = data
        rankObj[playerObj[frontPlayer]] = frontPlayer
    })
    
    for(let key in rankObj) {
        answer.push(rankObj[key])
    }
    
    return answer
    
    
    
//     callings.forEach((data, index) => {
//         let frontPlayer, backPlayer, frontNum, backNum
//         frontPlayer = players[players.indexOf(data) - 1]
//         backPlayer = players[players.indexOf(data)]
//         frontNum = players.indexOf(data) - 1
//         backNum = players.indexOf(data)
        
//         players[frontNum] = backPlayer
//         players[backNum] = frontPlayer
        
//         // console.log(players)
//     })

    // return players
}