function solution(people, limit) {
    let cnt = 0
    const sortPeople = people.sort((a,b) => a - b)

    while(sortPeople.length > 0) {
        if(sortPeople[0] + sortPeople[sortPeople.length-1] <= limit) {
            sortPeople.pop()
            sortPeople.shift()
            cnt++
        } else if(sortPeople[0] + sortPeople[sortPeople.length-1] > limit) {
            sortPeople.pop()
            cnt++
        }
    }
    
    return cnt
}
