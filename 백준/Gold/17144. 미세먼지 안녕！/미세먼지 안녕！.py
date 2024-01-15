import sys

R, C, T = map(int, sys.stdin.readline().split())
board = [list(map(int, sys.stdin.readline().split())) for _ in range(R)]
answer = 0

cleaner_up = [] # 2, 0
cleaner_down = [] # 3, 0

# 공기 청정기 위치
for i in range(R):
    if board[i][0] == -1:
        cleaner_up.append((i, 0))
        cleaner_down.append((i + 1, 0))
        break

# 확산
def diffusion():
    dx = [0, 0, 1, -1]
    dy = [1, -1, 0, 0]

    # 값을 저장할 용도
    new_board = [[0] * C for _ in range(R)]

    for i in range(R):
        for j in range(C):
            if board[i][j] != 0 and board[i][j] != -1:
                # 확산된 방향의 개수
                count = 0

                # 4방향 확인
                for k in range(4):
                    nx = dx[k] + i
                    ny = dy[k] + j
                    if 0 <= nx < R and 0 <= ny < C and board[nx][ny] != -1:
                        count += 1
                        new_board[nx][ny] += board[i][j] // 5 # 인접 방향 확산
                board[i][j] = board[i][j] - (board[i][j] // 5 * count) # 남은 미세 먼지

    # 확산 결과
    for i in range(R):
        for j in range(C):
            board[i][j] += new_board[i][j]
def clean_up():
    # 동 -> 북 -> 서 -> 남
    dx = [0, -1, 0, 1]
    dy = [1, 0, -1, 0]
    direction = 0 # 방향
    prev = 0 # 이전 값 저장할 용도
    start_x, start_y = cleaner_up[0][0], 1 # 시작 위치

    while True:
        nx = dx[direction] + start_x
        ny = dy[direction] + start_y

        # 공기 청정기 까지 돌면 끝
        if start_x == cleaner_up[0][0] and start_y == 0:
            break

        # 범위를 넘어가면 방향 바꾸기 동 -> 북 -> 서 -> 남
        if 0 > nx or nx >= R or 0 > ny or ny >= C:
            direction += 1
            continue

        # 이전 값과 현재 값을 바꾼다.
        prev, board[start_x][start_y] = board[start_x][start_y], prev
        # 현재 위치 이동
        start_x, start_y = nx, ny
    return


def clean_down():
    # 동 -> 남 -> 서 -> 북
    dx = [0, 1, 0, -1]
    dy = [1, 0, -1, 0]
    direction = 0
    prev = 0
    start_x, start_y = cleaner_down[0][0], 1

    while True:
        nx = dx[direction] + start_x
        ny = dy[direction] + start_y

        # 공기 청정기
        if start_x == cleaner_down[0][0] and start_y == 0:
            break

        if 0 > nx or nx >= R or 0 > ny or ny >= C:
            direction += 1
            continue

        prev, board[start_x][start_y] = board[start_x][start_y], prev
        start_x, start_y = nx, ny
    return

# T초 후
for _ in range(T):
    diffusion()
    clean_up()
    clean_down()

for i in range(R):
    for j in range(C):
        if board[i][j] > 0:
            answer += board[i][j]

print(answer)
