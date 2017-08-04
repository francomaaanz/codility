function solution(A) {
	var n = A.length + 1;
 	var expectedSum = (n / 2) * (n + 1);
 	var sum = 0;

	if(!A || A.length == 0){
		return 1;
	}

	for (var i = 0; i < A.length; i++) {
		sum += A[i];
	};
	return (expectedSum - sum);
}

function solution(A) {
    var xor = 0;
    for (var i = 0; i < A.length; i++){
        xor = xor^A[i]^(i + 1)
    }        
    return xor^(A.length + 1)
}



var A = [];
A[0] = 2
A[1] = 3
A[2] = 1
A[3] = 5

console.log(solution(A));
