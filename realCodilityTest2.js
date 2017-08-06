function cmp(a, b) { return a - b; }

function solution(A, B) {
    var n = A.length;
    var m = B.length;
    A.sort(cmp);
    B.sort(cmp);
    var i = 0;
    /* Wrong
    for (var k = 0; k < n; k++) {
        if (i < m - 1 && B[i] < A[k])
            i += 1;
        if (A[k] == B[i])
            return A[k];
    }
    */
    for (var k = 0; k < n;) {
        if (A[k] == B[i]) { 
            return A[k];
        }

        if (i < m - 1 && B[i] < A[k]) {
            i += 1;
        }
        else {
            k += 1;
        }
            
    }
    return -1;
}


var A = [];
// A[0] = 1    
// A[1] = 3    
// A[2] = 2    
// A[3] = 1   

A[0] = 2 
A[1] = 1 
                
var B = [];
B[0] = 3
B[1] = 3

// B[0] = 4
// B[1] = 2
// B[2] = 5
// B[3] = 3
// B[4] = 2

console.log(solution([7, 15, 9, 22,8],[7, 8, 10, 9, 15]))