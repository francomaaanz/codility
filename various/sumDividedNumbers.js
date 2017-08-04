var divisors = (n)=>[...Array(n+1).keys()].slice(1)
   	.reduce((s, a)=>s+(!(n % (a)) && a), 0);

divisors(12)
console.log(divisors(12));

function sumOfDivision (A) {
	
	var sum = 0;
	
	if(!A || A < 0) {
		return A
	}

	for (var i = 0; i < A.length; i++-) {
		if(A[i] % 2) {
			sum += (A[i] / 2)
		}
	};
	
	return sum;
}

console.log(sumOfDivision(12));