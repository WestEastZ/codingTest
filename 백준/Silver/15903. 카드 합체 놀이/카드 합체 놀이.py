import sys
import heapq

N, M = map(int, sys.stdin.readline().split())
cards = list(map(int, sys.stdin.readline().split()))
heapq.heapify(cards)
answer = 0

for i in range(M):

    min_card1 = heapq.heappop(cards)
    min_card2 = heapq.heappop(cards)

    sum_card = min_card1 + min_card2

    for _ in range(2):
        heapq.heappush(cards, sum_card)


answer = sum(cards)
print(answer)