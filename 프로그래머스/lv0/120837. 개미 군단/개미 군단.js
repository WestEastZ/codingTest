function solution(hp) {
  let remain = hp;
  let ant = 0;

  // 장군개미
  if (hp % 5 === 0) {
    return hp / 5;
  }

  if (hp % 5 !== 0) {
    remain = hp % 5;
    ant += parseInt(hp / 5);

    console.log(remain);
    console.log(ant);
  }

  // 병정개미
  if (remain % 3 === 0) {
    return (ant += remain / 3);
  }

  if (remain % 3 !== 0) {
    ant += parseInt(remain / 3);
    remain = remain % 3;

    console.log(ant);
    console.log(remain);
  }

  // 일개미
  if (remain % 1 === 0) {
    return (ant += parseInt(remain / 1));
  }
}
