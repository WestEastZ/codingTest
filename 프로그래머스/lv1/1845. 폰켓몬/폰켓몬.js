function solution(nums) {
  // 중복 제거
  const set = new Set(nums);
  const setNums = [...set];
  // 3 3 2

  // 가져가는 폰켓몬 숫자 2 3 3
  const take = parseInt(nums.length / 2);

  if (setNums.length >= take) {
    return take;
  } else {
    return setNums.length;
  }
}
