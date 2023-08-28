function solution(a, b) {
    const week = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
    let today = new Date(`2016-${a}-${b}`)
    return week[today.getDay()]
}