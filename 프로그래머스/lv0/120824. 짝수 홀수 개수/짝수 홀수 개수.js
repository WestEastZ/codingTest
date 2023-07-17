function solution(num_list) {
  let odd = 0;
  let even = 0;
  let arr = [];

  for (let i = 0; i <= num_list.length - 1; i++) {
    if (num_list[i] % 2 == 0) {
      odd++;
    } else {
      even++;
    }
  }

  arr.push(odd)
  arr.push(even)
    
 return arr
}