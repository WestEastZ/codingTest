function solution(s) {

 let lowerCase = s.toLowerCase()
 
 let answer = lowerCase.split(" ").map((v) => {
    let upperCase = v.charAt(0).toUpperCase()  
    return `${upperCase}${v.slice(1)}`
});
    
    return answer.join(" ")
}
