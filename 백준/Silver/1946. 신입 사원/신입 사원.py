import sys

n = int(sys.stdin.readline())

for _ in range(n):
    m = int(sys.stdin.readline())
    rank = [list(map(int, sys.stdin.readline().split())) for _ in range(m)]
    rank = sorted(rank, key=lambda x: x[0]) # 서류 순위로 정렬

    count = 1 # 합격자
    rank_doc = rank[0][0] # 서류 순위
    rank_inter = rank[0][1] # 면접 순위

    for i in range(1, len(rank)):
        # 현재 면접자의 면접 순위가 더 높다면 현재 면접자로 기준을 변경

        if rank_inter > rank[i][1]:
            rank_inter = rank[i][1]
            count += 1
    print(count)