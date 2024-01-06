import heapq

def solution(scoville, K):

    cnt = 0
    heapq.heapify(scoville)
    
    while scoville[0] < K:
        # 연산해도 K보다 낮음 -> 만들 수 없음       
        if len(scoville) == 2 and scoville[0] + scoville[1] * 2 < K:
            return -1
        
        min1 = heapq.heappop(scoville)
        min2 = heapq.heappop(scoville)
        
        heapq.heappush(scoville, min1 + min2 * 2)
        cnt += 1
        


    return cnt