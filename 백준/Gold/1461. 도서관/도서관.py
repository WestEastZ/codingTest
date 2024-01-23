import sys

n, m = map(int, sys.stdin.readline().split())

lst = sorted(list(map(int, sys.stdin.readline().split())))

nega = []
posi = []
distance = []

for i in lst:
    if i > 0:
        posi.append(i)
    else:
        nega.append(i)

nega.sort()
posi.sort(reverse=True)

nega_point = [abs(nega[i]) for i in range(0, len(nega), m)]
posi_point = [posi[i] for i in range(0, len(posi), m)]

combine = sorted(nega_point + posi_point)

max_num = combine.pop()
max_num += 2*sum(combine)

print(max_num)