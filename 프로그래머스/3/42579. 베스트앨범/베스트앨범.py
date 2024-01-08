from collections import defaultdict

def solution(genres, plays):
    answer = []
    _list = []
    genres_dict = defaultdict(int)
    
    # 정보 리스트 제작 / 재생횟수 누적
    for i in range(len(genres)):
        _list.append({"genres" : genres[i], "plays": plays[i], "index" : i })
        genres_dict[genres[i]] += plays[i]
        
    # 횟수 별 정렬        
    sorted_genres = sorted(genres_dict, key = genres_dict.get, reverse = True)
        
    # 정보 정렬
    sorted_songs = sorted(_list, key = lambda x: (sorted_genres.index(x["genres"]) ,-x["plays"], x["index"]))
    
    
        
    for genre in sorted_genres:
        count = 0
        for song in sorted_songs:
            if song["genres"] == genre:
                answer.append(song["index"])
                count += 1
            if count == 2:
                break
                
    return answer
    
        
        
    