var divisors = (n)=>[...Array(n+1).keys()].slice(1)
   	.reduce((s, a)=>s+(!(n % (a)) && a), 0);

divisors(12)
console.log(divisors(12));
