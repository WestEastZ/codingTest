import sys
from itertools import combinations


# 모음이 1개 자음이 2개 이상
n, m = map(int, sys.stdin.readline().split()) # 4 6
alphabet = sorted(list(sys.stdin.readline().split())) # a t c i s w
words = list(combinations(alphabet, n))
aeiou = "aeiou"

for word in words:
    # 모음
    vo = 0
    for i in word:
        if i in "aeiou":
            vo += 1

    if vo >= 1 and n - vo >= 2:
        result = "".join(word)
        print(result)