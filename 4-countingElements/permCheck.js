function solution(A) {
    const N = A.length;
    return Number(new Set(A).size === N && Math.max(...A) === N);
}

var A = [];
A[0] = 4
A[1] = 1
A[2] = 3
A[3] = 2

console.log(solution(A));