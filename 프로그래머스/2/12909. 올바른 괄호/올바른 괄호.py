def solution(s):
    arr = []
    open = "("
    close = ")"
    
    
    for val in s:
        if val == open:
            arr.append(val)
        elif val == close:
            if len(arr) == 0:
                return False
            else: 
                arr.pop()    
            
    if len(arr) != 0:
        return False
    else:
        return True
