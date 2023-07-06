let [a, b, c] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number)
  .sort((x, y) => x - y);

if (a === b && a === c) {
  console.log(10000 + a * 1000);
} else if (a === b || a === c) {
  console.log(1000 + a * 100);
} else if (b === c) {
  console.log(1000 + b * 100);
} else {
  console.log(Math.max(a, b, c) * 100);
}


function dice(a, b, c) {
  if (a === b && a === c) {
    return 10000 + a * 1000;
  } else if (a === b || a === c) {
    return 1000 + a * 100;
  } else if (b === c) {
    return 1000 + b * 100;
  } else {
    return Math.max(a, b, c) * 100;
  }
}

dice()l;