function solution(A){
	var aux;

	if(A.length == 1)	{
		return A[0];
	}

	for(var i = 0; i < A.length - 1; i++){
		aux ^= A[i];
	}

	return aux;

}

var A = [];
A[0] = 1;
A[1] = 3;
A[2] = 6;
A[3] = 4;
A[4] = 1;
A[5] = 2;

// The function should return 5.
console.log(A);
console.log(solution(A));