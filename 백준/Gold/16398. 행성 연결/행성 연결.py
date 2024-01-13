import sys

n = int(sys.stdin.readline())
graph = []
answer = 0
parent = list(range(n))

for i in range(n):
    row = list(map(int, sys.stdin.readline().split()))
    for j in range(n):
        if i != j:
            graph.append((row[j], i, j))

graph.sort()

def find(x):
    if parent[x] == x:
        return x
    parent[x] = find(parent[x])
    return parent[x]

def union(x, y):
    x = find(x)
    y = find(y)

    if x == y:
        return
    parent[x] = y

for cost, planet1, planet2 in graph:
    if find(planet1) != find(planet2):
        union(planet1, planet2)
        answer += cost
print(answer)
