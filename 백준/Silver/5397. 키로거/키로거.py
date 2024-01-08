import sys

input = sys.stdin.readline
t = int(input())

for i in range(t):
    left = []
    right = []
    tmp = input().rstrip()

    for i in tmp:
        if i == '<':
            if left:
                right.append(left.pop())

        elif i == '>':
            if right:
                left.append(right.pop())

        elif i == '-':
            if left:
                left.pop()
        else:
            left.append(i)

    left.extend(reversed(right))
    print(''.join(left))