import sys
from collections import deque

n = int(sys.stdin.readline())
k = int(sys.stdin.readline())

if k >= n:
    print(0)
else:
    position = sorted(list(map(int, sys.stdin.readline().split())))
    distance = []

    for i in range(len(position) - 1, 0, -1):
        distance.append(position[i] - position[i - 1])

    distance = deque(sorted(distance, reverse = True))

    for i in range(k - 1):
        distance.popleft()

    print(sum(distance))
