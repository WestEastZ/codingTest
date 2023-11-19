function solution(cacheSize, cities) {
  let cache = [];
  let count = 0;

  cities.forEach((city) => {
    const upperCaseCityName = city.toUpperCase();

    // [서울, 제주, 광명]
      
    // 캐시 사이즈 0  
    if(cacheSize === 0) {
        count += 5
        
    // 도시 이름 포함
    } else if (cache.includes(upperCaseCityName)) {
      // 캐시 길이 초과
      if (cache.length >= cacheSize) {
        for (let i = 0; i < cache.length; i++) {
          if (cache[i] === upperCaseCityName) {
            cache.splice(i, 1);
            i--;
          }
        }
        cache.push(upperCaseCityName);

      // 캐시 사이즈 0  
      } else if(cacheSize === 0) {
                  for (let i = 0; i < cache.length; i++) {
          if (cache[i] === upperCaseCityName) {
            cache.splice(i, 1);
            i--;
          }
        }
        cache.push(upperCaseCityName);
          
      // 캐시 길이 충분    
      } else {
        for (let i = 0; i < cache.length; i++) {
          if (cache[i] === upperCaseCityName) {
            cache.splice(i, 1);
            i--;
          }
        }
        cache.push(upperCaseCityName);
      } 

      count += 1;

      // 도시 이름 미포함
    } else {
      // 캐시 길이 초과
      if (cache.length >= cacheSize) {
        cache.shift();
        cache.push(upperCaseCityName);

        // 캐시 길이 충분
      } else {
        cache.push(upperCaseCityName);
      }
      count += 5;
    }
  });

  return count;
}
