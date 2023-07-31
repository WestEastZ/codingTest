function solution(n) {
    const three = n.toString(3)
    const revers = three.split('').reverse().join('')
    const ten = parseInt(revers, 3)
    return ten
    
}