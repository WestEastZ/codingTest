site_num, find_num = map(int, input().split())

dict = {}
find_dict = {}
for i in range(site_num):
    site, password = map(str, input().split())
    dict[site] = password

for i in range(find_num):
    site = str(input())
    find_dict[site] = dict[site]
    print(find_dict[site])