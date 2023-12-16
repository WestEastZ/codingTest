function solution(wallpaper) {
    const xfile = [];
    const yfile = [];
    const maxV = []
    const minV = []

    // 파일 좌표
    for(let i = 0; i<wallpaper.length; i++){
        for(let j = 0; j<wallpaper[i].length; j++) {
            if(wallpaper[i][j] === "#") {
                xfile.push(i)
                yfile.push(j)
            }
        }
    }

    // 최대최소값 구하기
    function getMaxMin (arr) {
        const max = Math.max(...arr) + 1
        const min = Math.min(...arr)
        minV.push(min)
        maxV.push(max)
    }
    getMaxMin(xfile)
    getMaxMin(yfile)
    
    console.log(...minV, ...maxV)
    return [...minV, ...maxV]
}
