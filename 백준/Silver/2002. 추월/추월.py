import sys

input = sys.stdin.readline
t = int(input())

in_cars = {}
out_cars = {}
count = 0

for i in range(t):
    car = input().rstrip()
    in_cars[car] = i

for i in range(t):
    car = input().rstrip()
    out_cars[car] = i

out_list = list(out_cars.keys())

for i in range(0, len(in_cars) - 1):
    cur_car = in_cars[out_list[i]]
    for j in range(i+1, len(in_cars)):
        next_car = in_cars[out_list[j]]
        if next_car < cur_car:
            count += 1
            break

print(count)