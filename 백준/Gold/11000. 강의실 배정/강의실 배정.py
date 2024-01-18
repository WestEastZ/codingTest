import sys, heapq

n = int(sys.stdin.readline())
times = sorted([list(map(int, sys.stdin.readline().split())) for _ in range(n)], key=lambda x: (x[0], x[1]))

heapq.heapify(times)

heap = [times[0][1]]

for i in range(1, n):
    if heap[0] > times[i][0]:
        heapq.heappush(heap, times[i][1])
    else:
        heapq.heappop(heap)
        heapq.heappush(heap, times[i][1])
print(len(heap))