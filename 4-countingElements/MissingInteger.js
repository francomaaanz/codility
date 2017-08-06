
/*
Write a function:

function solution(A);
that, given a non-empty zero-indexed array A of N integers, returns the minimal 
positive integer (greater than 0) that does not occur in A.

For example, given:

  A[0] = 1
  A[1] = 3
  A[2] = 6
  A[3] = 4
  A[4] = 1
  A[5] = 2
the function should return 5.

Assume that:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N), beyond input storage (not counting 
the storage required for input arguments).

*/

function solution(A) {
	var arr = new Array(A.length)
	for (var i = 0; i < A.length; ++i) {
		if(A[i] > 0) {
			arr[A[i]-1] = true;
		}
	};

	for (var i = 0; i < A.length; ++i) {
		if(arr[i] !== true) {
			return i + 1;
		}
	};
	console.log('sali por afuera')
	return A.length + 1;
}
var A = []; //should return 4, as it is the missing element.
// A[0] = 1;
// A[1] = 3;
// A[2] = 6;
// A[3] = 4;
// A[4] = 1;
// A[5] = 2;

A[0] = 101;
A[1] = 103;
A[2] = 106;
A[3] = 104;
A[4] = 101;
A[5] = 102;
console.log(solution(A));
