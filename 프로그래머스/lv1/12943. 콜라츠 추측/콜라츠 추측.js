function solution(num) {
  let counter = 0;

  while (num != 1) {
    counter++;
    if (num % 2 == 0) {
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }
  }
  if (counter >= 500) {
    counter = -1;
  }

  return counter;
}