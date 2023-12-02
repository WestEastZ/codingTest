function solution(ingredient) {
  let stack = [];
  let count = 0;

  ingredient.forEach((data) => {
    stack.push(data);

    const stackLength = stack.length;

    if (
      stack[stackLength - 4] === 1 &&
      stack[stackLength - 3] === 2 &&
      stack[stackLength - 2] === 3 &&
      stack[stackLength - 1] === 1
    ) {
        for (let i = 0; i <= 3; i++) {
            stack.pop();
        }
      count++;
    }
  });
  return count;
}