function solution(X, Y, D) {
	return Math.ceil((Y-X) / D);
}

var X = 10;
var Y = 85;
var D = 30;

console.log(solution(X, Y, D));