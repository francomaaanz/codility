function solution(a) {
  const n = a.length;

  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return Math.abs(a[0]);
  }

  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += a[i];
  }

  let min = Number.MAX_SAFE_INTEGER;
  let sumL = 0;
  let sumR = 0;
  for (let i = 0; i < n - 1; i++) {
    sumL += a[i];
    sumR = sum - sumL;
    const tmpMin = Math.abs(sumL - sumR);
    if (tmpMin < min) {
      min = tmpMin;
    }
  }

  return min;
}

var A = [];
A[0] = 3;
A[1] = 1;
A[2] = 2;
A[3] = 4;
A[4] = 3;

var B =  [-10, -20, -30, -40, 100]; //got 0 expected 20

console.log(solution(B));
/*
|(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|

3 - 

P = 1, difference = |3 − 10| = 7 
P = 2, difference = |4 − 9| = 5 
P = 3, difference = |6 − 7| = 1 
P = 4, difference = |10 − 3| = 7 

*/

