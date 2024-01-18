import sys

n = int(sys.stdin.readline())
distance = list(map(int, sys.stdin.readline().split()))
costs = list(map(int, sys.stdin.readline().split()))

answer = 0
cost = costs[0]

for i in range(n - 1):
    if costs[i] < cost:
        cost = costs[i]
    answer += cost * distance[i]
    
print(answer)
