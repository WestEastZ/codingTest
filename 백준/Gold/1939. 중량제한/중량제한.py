import sys

n, m = map(int, sys.stdin.readline().split())
graph = []
parent = [i for i in range(n+1)]
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

for _ in range(m):
    a, b, c = map(int, sys.stdin.readline().split())
    graph.append([c, a, b])

start, end = map(int, sys.stdin.readline().split())
graph.sort(key=lambda x: x[0], reverse=True)

for cost, a, b in graph:
    union(a, b)
    if find(start) == find(end):
        print(cost)
        break