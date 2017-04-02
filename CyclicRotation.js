function solution(A, K) {
	var lengthA = A.length;
	var newArray = [lengthA];
	var newK = K % lengthA;
	
	if(!A || A.length == 0 ){
		return A;
	}

	for(var i = 0; i < lengthA; i++){
		var max = i + newK;
		 newArray[(i + newK)% lengthA] = A[i];
	}
	return newArray;

}

var A =[3, 8, 9, 7, 6];
var Expected =[9, 7, 6, 3, 8];
var K = 3;
console.log('result => ', solution(A, K));