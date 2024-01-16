import sys
from collections import deque

n = int(sys.stdin.readline())

def BFS(start_x, start_y, end_x, end_y):
        dx = [-2, -1, 1, 2, 2, 1, -1, -2]
        dy = [1, 2, 2, 1, -1, -2, -2, -1]
        count = 0

        q = deque()
        q.append((start_x, start_y))

        while q:
                cur_x, cur_y = q.popleft()
                count += 1

                # 종료 조건
                if cur_x == end_x and cur_y == end_y:
                        return visited[cur_x][cur_y] - 1
                for i in range(8):
                        nx = cur_x + dx[i]
                        ny = cur_y + dy[i]

                        if 0 <= nx < board and 0 <= ny < board and visited[nx][ny] == 0:
                                visited[nx][ny] = visited[cur_x][cur_y] + 1
                                q.append((nx, ny))


for i in range(n):
        board = int(sys.stdin.readline())
        start_x, start_y = map(int, sys.stdin.readline().split())
        end_x, end_y = map(int, sys.stdin.readline().split())
        visited = [[0] * board for _ in range(board)]
        visited[start_x][start_y] = 1
        print(BFS(start_x, start_y, end_x, end_y))