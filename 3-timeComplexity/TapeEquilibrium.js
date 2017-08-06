function solution(a) {
  var left = 0;
  var rigth = 0;
  var diff = 0;
  var result = Infinity;
  var allSum = a.reduce(function(a,b){return a+b;});
  
  for (var i = 1; i < a.length; ++i) {
    left = left  + a[i-1];
    rigth = allAsum - left;
    diff = Math.abs(left - rigth);
    result = (result > diff) ? diff : result;
  };

  return result;
}

var A = [];
A[0] = 3;
A[1] = 1;
A[2] = 2;
A[3] = 4;
A[4] = 3;

var B =  [-10, -20, -30, -40, 100]; //got 0 expected 20

//console.log(solution(A));
/*
|(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|

3 - 

P = 1, difference = |3 − 10| = 7 
P = 2, difference = |4 − 9| = 5 
P = 3, difference = |6 − 7| = 1 
P = 4, difference = |10 − 3| = 7 

*/

