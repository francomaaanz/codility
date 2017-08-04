function solution(A){
  var x = 0;
  for(var i = 0; i < A.length; i++) {
  		x ^= A[i];
  }
  return x;
}

var array = [];
array[0] = 9;  
array[1] = 3;
array[2] = 9;
array[3] = 3;  
array[4] = 9;  
array[5] = 7;
array[6] = 9;
console.log('A => ', array)
console.log(solution(array))