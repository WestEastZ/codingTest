import sys
from itertools import combinations


# 모음이 1개 자음이 2개 이상
n, m = map(int, sys.stdin.readline().split()) # 4 6
alphabet = sorted(list(sys.stdin.readline().split())) # a t c i s w
words = list(combinations(alphabet, n))
aeiou = ["a", "e", "i", "o", "u"]

for word in words:
    vo = 0  # 모음
    co = 0 # 자음

    for i in word:
        # 모음 카운트
        if i in aeiou:
            vo += 1
        # 자음 카운트
        else:
            co += 1
    
    if vo >= 1 and co >= 2:
        result = "".join(word)
        print(result)