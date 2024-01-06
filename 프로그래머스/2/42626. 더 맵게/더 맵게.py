def solution(scoville, K):
    import heapq
    cnt = 0
    heapq.heapify(scoville)
    
    while scoville[0] < K:

        
        min1 = heapq.heappop(scoville)
        min2 = heapq.heappop(scoville)
        
        heapq.heappush(scoville, min1 + min2 * 2)
        cnt += 1
        
        # testcase 16, 22, 23  해결방법
        # item 2개 -> 만들 수 없음
        # 연산해도 K보다 낮음 -> 만들 수 없음       
        if len(scoville) == 2 and scoville[0] + scoville[1] * 2 < K:
            return -1
        
    return cnt