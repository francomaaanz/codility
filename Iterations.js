//Binary Gap
function binaryGapCeros (n) {
	var number = (n >>> 0).toString(2);
	console.log('number => ', number);
	var maxBinaryGap = 0;
	var binaryGap = 0;
	var valid = false;
	
	for(var i = 0; i < number.length; i++) {
		if(number[i] == 1) {
			maxBinaryGap = (binaryGap > maxBinaryGap) ? binaryGap : maxBinaryGap;
			binaryGap = 0;
			valid = true;
		} else if(valid) {
			binaryGap++;
			//esto esta mal y me reseteaba al ultimo GAP siempre,
			//solo tenia que hacerlo cuando valid = true;
			//maxBinaryGap = (binaryGap > maxBinaryGap) ? binaryGap : maxBinaryGap;			
		}
	}
	return (maxBinaryGap == 0 ) ? 0 : maxBinaryGap;
}



// console.log('529', binaryGapCeros(529));
// console.log('51712', binaryGapCeros(51712));//got 9 expected 2 110010100000000
// console.log('20', binaryGapCeros(20));//got 2 expected 1 10100
// console.log('6', binaryGapCeros(6));//  got 1 expected 0 110
console.log('328', binaryGapCeros(328));//  got 3 expected 2  101001000
// console.log('16', binaryGapCeros(16));// got 4 expected 0 n=16=2**4
// console.log('1024', binaryGapCeros(1024));// got 10 expected 0 n=1024=2**10

/*
	A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

	For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps.

	Write a function:

	function solution(N);

	that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

	For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5.

	Assume that:

	N is an integer within the range [1..2,147,483,647].
	Complexity:

	expected worst-case time complexity is O(log(N));
	expected worst-case space complexity is O(1).
*/


