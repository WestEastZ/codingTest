function solution(board, moves) {
    // const board = [
    //     [0,0,0,0,0],
    //     [0,0,1,0,3],
    //     [0,2,5,0,1],
    //     [4,2,4,4,2],
    //     [3,5,1,3,1]
    // ];
    
    // 0,4,2,4,0,1,0,3
    // 4,3,1,1,3,2,u,4
    
    const stack = []
    let result = 0
    
    moves.forEach((line) => {
        const doll = pick(board, line-1)
        if(doll) {
            if(stack[stack.length-1] === doll){
                result +=2
                stack.pop()
            } else {
                stack.push(doll)
            } 
        }
        
})
    return result
    
    function pick(board, line) {
        for(let i=0; i<board.length; i++) {
            if(board[i][line] !== 0){
                const doll= board[i][line]
                board[i][line] = 0
                return doll
            }
        }
    }
}