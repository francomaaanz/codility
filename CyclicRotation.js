function solution(A, K) {
	var lengthA = A.length;
	var newArray = [lengthA];
	var newK = K % lengthA;
	console.log('newK', newK);
	if(!A || A.length == 0 ){
		return A;
	}

	for(var i = 0; i < lengthA; i++){
		var sum = i + newK;
		var finalIndex = (sum)% lengthA;
		console.log('sum', sum);
		console.log('newK', newK);
		console.log('finalIndex', finalIndex);
	 	newArray[finalIndex] = A[i];
	}
	return newArray;
}

var A =[3, 8, 9, 7, 6];
// var A =[];
// var A =[0];
var Expected =[9, 7, 6, 3, 8];
var K = 3;
console.log('result => ', solution(A, K));