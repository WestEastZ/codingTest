def solution(clothes):
    answer = 1
    dict = {}
    for item, type in clothes:
        if dict.get(type):
            dict[type] = dict[type] + 1
        else:
            dict[type] = 1
            
    for i in dict.keys():
        answer = answer * (dict[i] + 1)
        
        
        
    return answer -1
          
        
        