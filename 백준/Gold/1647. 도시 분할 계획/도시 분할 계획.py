# 정답이 14가 나오는데 왜 틀릴까요 같이 고민해보는 시간을 가져봐요 하하~
class DisjointSet:
    def __init__(self, n):
        self.parent = list(range(n + 1))

    def find(self, x):
        if self.parent[x] == x:
            return x
        self.parent[x] = self.find(self.parent[x])
        return self.parent[x]

    def union(self, x, y):
        root_x = self.find(x)
        root_y = self.find(y)

        # 루트 노드가 같다면 같은 그룹에 속한다,
        if root_x == root_y:
            return

        # y의 루트 노드가 x의 루트 노드가 된다.
        self.parent[root_x] = root_y


if __name__ == '__main__':
    from sys import stdin, setrecursionlimit

    input = stdin.readline
    # 재귀 횟수 증가
    setrecursionlimit(10 ** 5)

    n, m = map(int, input().split())
    house = []
    result = []

    for _ in range(m):
        # 집1, 집2, 가중치
        x, y, k = map(int, input().split())
        # 가중치, 집1, 집2으로 저장
        house.append((k, x, y))

    house.sort()
    djs = DisjointSet(n)

    # 카운트를 만들어서
    visited_cnt = 0

    for a in house:
        cost, house1, house2 = a

        if djs.find(house1) != djs.find(house2):
            djs.union(house1, house2)
            result.append(cost)

            visited_cnt += 1
            if visited_cnt == n - 1:
                break

    print(sum(result[:-1]))