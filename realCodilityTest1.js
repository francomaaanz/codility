function solution(A) {
    var sortArr = A.sort();
    var i = 0;
    var length = A.length;
    var flag = false;
    var count = 0;
    
    if(!A || length === 0) {
        return 0;
    }
    
    if(length === 1) {
        return 1;
    }
    
    for(i; i <= length; i++) {
        if(sortArr[i] === -1) {
            flag = true;
            sortArr.splice(i, 1);
            count++;
        }
    }
    if(flag == true){
        for(let i = 0; i < count; i++) {
        sortArr.push(-1);
        }
        
    }
    
    return sortArr.length -1;
}