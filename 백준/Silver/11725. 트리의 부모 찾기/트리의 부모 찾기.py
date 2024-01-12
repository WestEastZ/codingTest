import sys
from collections import defaultdict
sys.setrecursionlimit(10**6)
n = int(sys.stdin.readline())

_dict = defaultdict(list)
parent = [0] * (n+1)

for i in range(n - 1):
    node1, node2 = map(int, sys.stdin.readline().split())
    _dict[node1].append(node2)
    _dict[node2].append(node1)

def DFS(x):
    for i in _dict[x]:
        if parent[i] == 0:
            parent[i] = x
            DFS(i)

DFS(1)

for i in parent[2:]:
    print(i)