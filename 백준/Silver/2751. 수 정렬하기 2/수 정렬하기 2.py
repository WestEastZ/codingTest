import sys

n = int(sys.stdin.readline())
_list =[]
for i in range(n):
    m = int(sys.stdin.readline())
    _list.append(m)
answer = sorted(_list)


for i in answer:
    print(i)
