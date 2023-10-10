function solution(A,B){
    const arrA = A.sort((a,b) => a-b)
    const arrB =  B.sort((a,b) => b-a)
    const arrAnswer = A.map((item, index) => {
        return item * B[index]
    })
    
   return arrAnswer.reduce((a,c) => a + c)
}