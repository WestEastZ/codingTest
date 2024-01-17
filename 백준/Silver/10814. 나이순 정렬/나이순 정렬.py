import sys

n = int(sys.stdin.readline())
_list = []
for _ in range(n):
    n, m = map(str, sys.stdin.readline().split())
    _list.append([int(n), m])

answer = sorted(_list, key=lambda x: x[0])

for i in answer:
    print(*i)