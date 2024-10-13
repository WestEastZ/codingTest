def solution(array, commands):
    answer = []
    
    
    for command in commands:
        start = command[0]
        end = command[1]
        target = command[2]
        
        aa = array[start - 1 : end]
        aa.sort()
        
        answer.append(aa[target - 1])
        
    return answer
        
        