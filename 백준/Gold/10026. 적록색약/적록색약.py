import sys
sys.setrecursionlimit(10**9)
n = int(sys.stdin.readline())

visited = [[0] * n for _ in range(n)]
board = [list(sys.stdin.readline().rstrip()) for _ in range(n)]


dx = [0, 0, -1, 1]
dy = [1, -1, 0, 0]
count_not = 0
count_yes = 0

def DFS(x, y):
    visited[x][y] = 1 # 방문
    color = board[x][y] # 현재 색

    for k in range(4):
        nx = x + dx[k]
        ny = y + dy[k]

        if 0 <= nx < n and 0 <= ny < n: # 범위가 맞고
            if visited[nx][ny] == 0: # 방문하지 않고
                if color == board[nx][ny]: # 색상이 일치하면
                    DFS(nx, ny)

for i in range(n):
    for j in range(n):
        if visited[i][j] == 0:
            DFS(i, j)
            count_not += 1

# 색상 변경
for i in range(n):
    for j in range(n):
        if board[i][j] == "G":
            board[i][j] = "R"

# 방문 기록 초기화
visited = [[0] * n for _ in range(n)]

for i in range(n):
    for j in range(n):
        if visited[i][j] == 0:
            DFS(i, j)
            count_yes += 1

print(count_not, count_yes)
