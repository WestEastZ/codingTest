def solution(nums):
    from collections import Counter
    s = Counter(nums)
    answer = 0
    
    if len(s) >= len(nums)/2:
        answer = len(nums)/2
    else:
        answer = len(s)
        
    return answer
    