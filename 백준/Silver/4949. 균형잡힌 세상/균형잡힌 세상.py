import sys

while True:
    string = sys.stdin.readline().rstrip()
    stack = []
    
    if string == ".":
        break

    for i in string:
        if i == "(":
            stack.append(i)
        elif i == ")":
            if stack and stack[-1] == "(":
                stack.pop()
            else:
                stack.append(i)
                break
        elif i == "[":
            stack.append(i)
        elif i == "]":
            if stack and stack[-1] == "[":
                stack.pop()
            else:
                stack.append(i)
                break

    if stack:
        print("no")
    else:
        print("yes")