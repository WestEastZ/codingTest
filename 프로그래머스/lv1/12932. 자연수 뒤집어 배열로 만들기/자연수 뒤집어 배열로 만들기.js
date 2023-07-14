function solution(n) {
    var arr = n.toString().split('');
    var answer = [];

    for(var i=arr.length-1; i>=0; i--){
        answer.push(parseInt(arr[i])); 
    }
    return answer;
}