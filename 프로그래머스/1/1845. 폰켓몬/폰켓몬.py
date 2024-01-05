def solution(nums):
    # from collections import Counter
    # s = Counter(nums)
    
    dict = {}
    answer = 0
    
    for num in nums:
        if dict.get(num):
            dict[num] += 1
        else:
            dict[num] = 1   
    
    if len(dict) >= len(nums)/2:
        answer = len(nums)/2
    else:
        answer = len(dict)
        
    return answer
    