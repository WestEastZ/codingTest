import heapq
import sys

N = int(sys.stdin.readline().rstrip())

heap = []

for i in range(N):
    num = int(sys.stdin.readline().rstrip())

    if num == 0:
        if heap:
            print(heapq.heappop(heap))
        else:
            print(0)

    else:
        heapq.heappush(heap, num)
