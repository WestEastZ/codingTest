function solution(arr1, arr2) {
arr1.forEach((x, i, z) => x.forEach((y, j) => z[i][j] += arr2[i][j]))
    
return arr1
}