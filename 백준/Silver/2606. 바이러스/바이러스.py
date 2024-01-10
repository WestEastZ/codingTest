import sys

n = int(sys.stdin.readline()) # 노드 개수
m = int(sys.stdin.readline()) # 간선 개수

_dict = {}

for _ in range(m):
    node1, node2 = map(int, sys.stdin.readline().split())

    if node1 in _dict:
        _dict[node1].append(node2)
    else:
        _dict[node1] = [node2]

    if node2 in _dict:
        _dict[node2].append(node1)
    else:
        _dict[node2] = [node1]

visited = [0 for _ in range(n+1)]

def dfs(n):
    # 노드 방문
    visited[n] = 1

    # 현재 노드의 연결 노드 확인
    for node in _dict.get(n, []):
        # 연결 노드에 방문하지 않았다면
        if visited[node] == 0:
            dfs(node)


dfs(1)

print(sum(visited) - 1)