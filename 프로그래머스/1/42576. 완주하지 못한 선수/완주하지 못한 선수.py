def solution(participant, completion):
    answer = ''
    dic = {}
    count = 0
    
    for person in participant:
        if person in dic:
            dic[person] += 1
        else:
            dic[person] = 1
            
    for person in completion:
        if person in dic:
            dic[person] -= 1
            
    for person in dic.keys():
        if dic[person] > 0:
            answer = person
            
    
    return answer