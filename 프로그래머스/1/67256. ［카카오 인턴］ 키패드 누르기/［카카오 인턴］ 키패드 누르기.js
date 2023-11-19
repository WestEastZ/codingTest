function solution(numbers, hand) {
  // numbers = [1,3,4,5,8,2,1,4,5,9,5]
  // hand = "right"

  // 키패드
  const keypad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };

  // 결과
  const result = [];

  // 손 위치
  let leftHand = keypad["*"];
  let rightHand = keypad["#"];

  numbers.forEach((num) => {
    // 왼쪽
    if (num === 1 || num === 4 || num === 7) {
      result.push("L");
      leftHand = keypad[num];
      // 오른쪽
    } else if (num === 3 || num === 6 || num === 9) {
      result.push("R");
      rightHand = keypad[num];

      // 중앙
    } else {
      const absLeft = Math.abs(leftHand[0] - keypad[num][0]) +
                      Math.abs(leftHand[1] - keypad[num][1])
    console.log("absLeft : ",absLeft)
      const absRight = Math.abs(rightHand[0] - keypad[num][0]) +
                       Math.abs(rightHand[1] - keypad[num][1]) 
    console.log("absRight : ",absRight)
      if (absLeft > absRight) {
        result.push("R");
        rightHand = keypad[num];
      } else if (absLeft < absRight) {
        result.push("L");
        leftHand = keypad[num];
      } else if (absLeft == absRight) {
          if(hand === "left") {
            result.push("L")
            leftHand = keypad[num];
          } else if(hand === "right") {
            result.push("R");
            rightHand = keypad[num];
          }
      }
    }
  });

  return result.join("");
}
