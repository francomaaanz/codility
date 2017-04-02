function solution(A) {
	
	var arrSorted = A.sort();

	console.log('sorted', arrSorted);
	var  missElm;
	var length = A.length + 1;

	for (var i = 0; i < A.length; i++) {
		missElm ^= A[i];
	};

	return missElm
}
var A = [];
A[0] = 2
A[1] = 3
A[2] = 1
A[3] = 5

console.log(solution(A));
