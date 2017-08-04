//recursive factorial
function facRec(n) {
    if(n == 0){
    	return 1;	
    } 
	return n * fac(n - 1);
}

facRec(4);
console.log(facRec(4));

//iterative factorial
function facIter(n) {
	var tmp;
	
	if(n <= 1){
    	return 1;	
    } 

    for(var i = 1; i <= n; i++){	
		tmp*= i;	
    }
	return tmp;
}
facIter(4);
console.log(facIter(4));

//recursive fibo with aux function
function fiboRec(n){
	if(n <= 1){
		return 1;
	}
	return aux(n, 1, 0);
}

function aux(n, acc, prev) {
	if(n <= 1){
		return 0;
	}
	return this.aux(n, acc, acc + prev)
}

//iterative fibonacci
function fibonacci(n) {
	var tmp, prev = 1, acc = 0;
	while (n > 0){
	    tmp = prev;
	    prev = acc;
	    acc = tmp + acc; 
	    n--;
	}
	return acc;	
}
console.log(fibonacci(5));