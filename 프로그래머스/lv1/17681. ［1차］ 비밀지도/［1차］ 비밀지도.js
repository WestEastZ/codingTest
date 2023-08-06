function solution(n, arr1, arr2) {
  let sum = [];
  let fir = [];
  let sec = [];

    // 5자리 2진수 변환
  for (let i = 0; i < n; i++) {
    let arr1Bin = arr1[i].toString(2).padStart(n, "0");
    let arr2Bin = arr2[i].toString(2).padStart(n, "0");

      // 각 배열에 push
    fir.push(arr1Bin);
    sec.push(arr2Bin);
  }

    // 1, 0 비교하여 str에 입력
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n; j++) {
      if (fir[i][j] == 1 || sec[i][j] == 1) {
        str += "1";
      } else {
        str += "0";
      }
    }
     // # , " "으로 변환
    let toHash = str.replaceAll(1, "#");
    let toSpasce = toHash.replaceAll(0, " ");

    sum.push(toSpasce);
  }
  return sum;
}

