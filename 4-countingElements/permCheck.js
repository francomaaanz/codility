/*

*/

function solution(A) {
    const N = A.length;
    const set = new Array(N).length;
    const max = Math.max(...A);
    return (Number(set === N && max === N) == 1) ? 1 : 0;
}

// function solution(A) {
//     var N = A.length;
//     var sum = (N * (N+1)) / 2;
//     var tap = [];
//     for (var i=0; i < N; i++) {
//         sum-=A[i];
//         if(tap[A[i]]) {
//             return 0;
//         }
//         tap[A[i]] = true;
//     }
//     return +(sum==0);
// }

var A = [];
A[0] = 4
A[1] = 1
A[2] = 3
A[3] = 2

console.log(solution(A));
var B = [];
B[0] = 4
B[1] = 1
B[2] = 3
console.log(solution(B));
