def solution(arr):
    
    stack = []
    
    for index, num in enumerate(arr):
        if index == 0:
            stack.append(num)
            
        elif stack[-1] != num:
            stack.append(num)
            
            
    return stack
            
    
            
    