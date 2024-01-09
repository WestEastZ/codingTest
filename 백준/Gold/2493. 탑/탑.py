import sys

n = int(sys.stdin.readline())
towers = list(map(int, sys.stdin.readline().split()))

stack = []
answer = [0 for _ in range(n)]

for i in range(n):
    while stack:
        if stack[-1][1] > towers[i]:
            answer[i] = stack[-1][0] + 1
            break
        else:
            stack.pop()

    stack.append([i, towers[i]])

print(*answer)