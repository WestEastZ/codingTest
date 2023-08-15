function solution(arr1, arr2) {
  arr1.forEach((x, i) => x.forEach((y, j) => arr1[i][j] += arr2[i][j]));
  return arr1;
}