import sys

n = int(sys.stdin.readline()) # 3

def DFS(x):
    global count

    if sum(arr) > m:
        return
    if sum(arr) == m:
        count += 1
        return

    for i in range(1, 4):
        arr.append(i)
        DFS(x + i)
        arr.pop()

for _ in range(n):
    m = int(sys.stdin.readline().rstrip()) # 4, 7, 10
    count = 0
    arr = []
    DFS(0)
    print(count)
