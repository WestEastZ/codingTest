import sys

n = int(sys.stdin.readline())
_list = sorted(list(map(int, sys.stdin.readline().split())))

answer = []
for i in range(1, len(_list) + 1):
    tmp = _list[0:i]
    answer.append(sum(tmp))

print(sum(answer))