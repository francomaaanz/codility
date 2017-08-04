// function solution(A, K) {
// 	var lengthA = A.length;
// 	var newArray = [lengthA];
// 	var newK = K % lengthA;

// 	console.log('newK', newK);

// 	if(!A || A.length == 0 ){
// 		return A;
// 	}

// 	for(var i = 0; i < lengthA; i++){
// 		var sum = i + newK;
// 		var finalIndex = (sum) % lengthA;
// 	 	newArray[finalIndex] = A[i];
// 	}
// 	return newArray;
// }

// const solution = (arr, k) => {
// 	console.log('arr',arr);
// 	console.log('(k%arr.length)', +(k%arr.length));
// 	return	arr.splice(+(k%arr.length)).concat(arr)
// }

const solution = (arr, k) => {
	arr.splice(-(k%arr.length)).concat(arr);
}

var A =[3, 8, 9, 7, 6];
// var A =[];
// var A =[0];
var Expected =[9, 7, 6, 3, 8];
var K = 3;
//console.log('result => ', solution(A, K));
console.log('result => ', solution(A, K));