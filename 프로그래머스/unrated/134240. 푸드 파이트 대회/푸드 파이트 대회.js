function solution(food) {
    var answer = '';
    
    food.forEach((v, i) => {
    answer += i.toString().repeat(parseInt(v/2)) 
})
    
    // return answer + 0 + answer.split("").reverse().join("");
    return `${answer}0${answer.split("").reverse().join("")}`
}