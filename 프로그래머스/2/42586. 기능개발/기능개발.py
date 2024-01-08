from collections import deque
def solution(progresses, speeds):
    
    answer = []
    qu = deque()
    
    
    for task, speed in zip(progresses, speeds):
        task_count = 0
        
        while task < 100:
            task += speed
            task_count += 1
            
        qu.append(task_count)
    
    while qu:
        count = 1
        day = qu.popleft()
        
        while qu and day >= qu[0]:
            qu.popleft()
            count += 1
        answer.append(count)
    
    return answer
        
        
        