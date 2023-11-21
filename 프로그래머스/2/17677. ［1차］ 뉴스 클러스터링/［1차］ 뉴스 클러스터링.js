function solution(str1, str2) {
  // 대문자화
  const upperCaseStr1 = str1.toUpperCase();
  const upperCaseStr2 = str2.toUpperCase();

  // 다중집합
  const multisetStr1 = [];
  const multisetStr2 = [];

  // 두글자씩 끊기 / 숫자 변환
  for (let i = 0; i < upperCaseStr1.length - 1; i++) {
    multisetStr1.push([
      upperCaseStr1[i].charCodeAt(),
      upperCaseStr1[i + 1].charCodeAt(),
    ]);
  }

  for (let i = 0; i < upperCaseStr2.length - 1; i++) {
    multisetStr2.push([
      upperCaseStr2[i].charCodeAt(),
      upperCaseStr2[i + 1].charCodeAt(),
    ]);
  }

  // 문자 변환, 해당
  const charStr1 = multisetStr1
    .map((item) => item.filter((number) => 65 <= number && number <= 90))
    .filter((arr) => arr.length >= 2)
    .map((arr) => {
      return arr
        .map((number) => {
          return String.fromCharCode(number);
        })
        .join("");
    });

  const charStr2 = multisetStr2
    .map((item) => item.filter((number) => 65 <= number && number <= 90))
    .filter((arr) => arr.length >= 2)
    .map((arr) => {
      return arr
        .map((number) => {
          return String.fromCharCode(number);
        })
        .join("");
    });

  console.log("charStr1 :", charStr1);
  console.log("charStr2 :", charStr2);

  const intersection = [];
  const union = [];
  for (var i = 0; i < charStr2.length; i++) {
      // 교집합
    if (charStr1.indexOf(charStr2[i]) >= 0) {
      intersection.push(charStr1.splice(charStr1.indexOf(charStr2[i]), 1));
    }
      // 합집합
    union.push(charStr2[i]);
  }

    // charStr1 차집합
  for (var i = 0; i < charStr1.length; i++) {
    union.push(charStr1[i]);
  }
  console.log("intersection :", intersection);
  console.log("union :", union);

  // 자카드 유사도
  const jacquard = (intersection, union) => {
     if (intersection.length === 0 && union.length === 0) {
      return 65536;
    } else {
      return Math.floor((intersection.length / union.length) * 65536);
    }
  };
  return jacquard(intersection, union);
}
