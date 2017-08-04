function longestPassword(string) {
	var spllited = string.split(" ");

	for (var i = 0; i < spllited.length - 1; i++) {
		spllited[i]
	};

}
var string = "test 5 a0A pass007 ?xy1";
//console.log(longestPassword(string));
console.log(solution(string));



 function solution(S) {
	// write your code in JavaScript (Node.js 6.4.0)
	var password = S.split(" ");
	var longestPasswordLength = -1;
		

	for (var i = 1; i < password.length; i++) {

			if(password[i].match(/^[a-zA-Z0-9]*$/)) {
				
				console.log('password[i]', password[i], password[i].length %2);
				//impar
				if(password[i].length %2 != 1){
					return;
				}
				
				var chaCount = (password[i].match(/[a-zA-Z]/g) || []).length;
				//par
				if(chaCount %2 != 0) {
					return;
				}
					
				if(password[i].length > longestPasswordLength) {
					longestPasswordLength = password[i].length;
				}
			}
		};	
			
	/*passwords.forEach(function(password) {

		if(password.match(/^[a-zA-Z0-9]*$/)) {
			if(password.length %2 != 1){
				return;
			}
			
			var chaCount = (password.match(/[a-zA-Z]/g) || []).length;
			if(chaCount %2 != 0) {
				return;
			}
				
			if(password.length > longestPasswordLength) {
				longestPasswordLength = password.length;
			}
		}
	});*/

	return longestPasswordLength;
}