import sys

n = int(sys.stdin.readline())

board = []
house = []
count = 0

dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]

# 입력
for _ in range(n):
    row = list(sys.stdin.readline().rstrip())
    board.append(row)

def dfs(x, y):
    global count
    # 범위 조절
    if x < 0 or x >= n or y < 0 or y >= n:
        return

    if board[x][y] == "1":
        count += 1
        board[x][y] = "0"
        for i in range(4):
            dfs(dx[i] + x, dy[i] + y)

# 1일 때 방문
for i in range(n):
    for j in range(n):
        if board[i][j] == "1":
            dfs(i, j)
            house.append(count)
            count = 0

answer = sorted(house)
print(len(answer))
for i in answer:
    print(i)