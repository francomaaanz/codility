// const solution = (arr, k) => {
// 	arr.splice(-(k%arr.length)).concat(arr);
// }

const solution = (A, k) => {
	var el;
	for (var i = 0; i < K%A.length - 1; i++) {
		//Remove the first element of an array:
		el = A.shift();
		//Add el to the end of an array:
		A.push(el);
		/*
			//Remove the last element of an array:
			el = A.pop()
			//insert el at the beginning
			A.unshift(el)
		*/
	};
	return A;
}

var A =[3, 8, 9, 7, 6];
// var A =[];
// var A =[0];
var Expected =[9, 7, 6, 3, 8];
var K = 3;
//console.log('result => ', solution(A, K));
console.log('A => ', A);
console.log('result => ', solution(A, K));
console.log('Expected => ', Expected);