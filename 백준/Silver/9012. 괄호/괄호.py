T = int(input())

for i in range(T):
    strs = input()
    stack = []
    open = "("
    close = ")"
    
    for parenthesis in strs:
        if parenthesis == open:
             stack.append(parenthesis)
        elif parenthesis == close:
            if len(stack) == 0:
                print("NO")
                break
            else:
                stack.pop()
    else:
        if not stack:
            print("YES")
        else:
            print("NO")