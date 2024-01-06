def solution(s):
    
    open = "("
    close = ")"
    stack = []
    
    
    for item in s:
        if item == open:
            stack.append(item)
        else:
            if stack:
                stack.pop()
            else:
                return False
    
    if stack:
        return False
    else:
        return True
    
    