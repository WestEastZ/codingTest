from collections import deque
def solution(priorities, location):
    
    dq = deque([val, idx] for idx, val in enumerate(priorities))
    
    count = 0
    
    while dq:
        first_task = max(dq, key = lambda x :x[0])[0]
        task = dq.popleft()

        if task[0] >= first_task:
            count += 1
            if task[1] == location:
                return count
        else:
            dq.append(task)
            
    return count
        
        
        
    
    