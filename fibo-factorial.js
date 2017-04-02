// function facRec(n) {
//     if(n == 0){
//     	return 1;	
//     } 
// 	return n * fac(n - 1);
// }

// facRec(4);
// console.log(facRec(4));

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

//fibo recursivo con una funcino auxiliar para bajar el O(N)
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

//comun con un while;
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



console.log(fibonacci(5));*/