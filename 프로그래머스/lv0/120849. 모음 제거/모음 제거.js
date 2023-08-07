function solution(my_string) {
  let 모음 = ["a", "e", "i", "o", "u"];
  return my_string
    .split("")
    .filter((v) => !모음.includes(v))
    .join("");
}