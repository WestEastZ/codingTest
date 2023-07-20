function solution(s) {
    let answer = s.split('');
    
    return answer.sort((a, b) => a > b ? -1 :1 ).join('')
    
//     let lowCaseArr = [];
//     let upCaseArr = [];

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] !== s[i].toUpperCase()) {
//       lowCaseArr.push(s[i]);
//     } else {
//         upCaseArr.push(s[i])
//     }
//   }
//     const newlowCaseArr = lowCaseArr.sort((a, b) => a > b ? -1 : 1).join('');
//     const newUpCaseArr = upCaseArr.sort((a, b) => a > b ? -1 : 1).join('');
    
//     return newlowCaseArr + newUpCaseArr
}
