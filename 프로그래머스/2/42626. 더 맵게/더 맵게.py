def solution(scoville, K):
    import heapq
    cnt = 0
    heapq.heapify(scoville)
    
    while scoville[0] < K:
        cnt += 1
        
        min1 = heapq.heappop(scoville)
        min2 = heapq.heappop(scoville)
        
        heapq.heappush(scoville, min1 + min2 * 2)
        
        if len(scoville) == 2 and scoville[0] + scoville[1] * 2 < K:
            return -1
        
    return cnt