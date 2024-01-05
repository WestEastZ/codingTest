N = int(input())
arr1 = sorted(list(map(int, input().split())))
M = int(input())
arr2 = list(map(int, input().split()))

dict1 = {}

for i in range(len(arr1)):
    num = arr1[i]
    dict1[num] = num

for j in arr2:
    if dict1.get(j):
        print(1)
    else:
        print(0)