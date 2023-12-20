function solution(n, words) {
    let answer = [0, 0]
    let passWords = []
    let lastWord = words[0].slice(-1)

    passWords.push(words[0])
    
    for(let i = 1; i<words.length; i++) {
        
        if(lastWord === words[i].slice(0, 1) && !passWords.includes(words[i])) {
            passWords.push(words[i])
        } else {
            answer = [i % n + 1 , Math.floor(i / n) + 1]
            break
        }
        
        lastWord = words[i].slice(-1)
    }

    return answer
}



    // words.forEach((data, index) => {
        
//         // 끝말과 다른 사람
//         if(lastWord === data.slice(0, 1)) {
//             // O
//             passWords.push(data)
//             lastWord = data.slice(-1)
//         } else if(lastWord !== data.slice(0, 1))  {
//             console.log(data)
//         }
        
//     })