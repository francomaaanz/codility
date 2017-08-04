function concatenationProcess(init) {
    var length = init.length;
    
    var Q = init.filter(function(item){
        return item.length == 0;
    })
    console.log('Q =', Q.length);
    var rev = (Q > 0) ? init : init.reverse();
    var concat = '';
    var concatMin = '';
    var aux = '';
    var i = 0;
      
    if(rev.length <= 1) {
        console.log('Empty');
    }

    for(i; i < length; i++) {
        if(rev[i].length == 1){
            aux += rev[i];
            console.log(aux, ' <= aux')
            rev.splice(i, 1);
        }
        concat += rev[i];
    }
    console.log('aux', aux);
    return concat;
}

var A = ["a", "abc", "abcc", "aaa", "z", "", "qw"]
//concatenationProcess();
//console.log('expected: ', "abcaaaabccqwaz");

/*

The positive integer n is given. How many solutions in positive integers does the following equation have:

1 / n = 1 / a + 1 / b ?
Example

For n = 2, the output should be
numberOfSolutions(n) = 3.

Note:
For n = 2 solutions (a, b) = (3, 6) and (a, b) = (6, 3) are different.

Input/Output

[time limit] 4000ms (js)
[input] integer n

A positive integer.

Guaranteed constraints:
1 ≤ n ≤ 100.

[output] integer

*/

function numberOfSolutions(n) {

  var result = 0;
  for (var a = n + 1; a < 2 * n; a++) {
    if ((a * n) % (a - n) === 0) {
      result++;
    }
  }

  return result * 2 + 1;
}

// console.lof(numberOfSolutions(2));
// console.lof(numberOfSolutions(1));
// console.lof(numberOfSolutions(3));
// console.lof(numberOfSolutions(5));
// numberOfSolutions(n)
// numberOfSolutions(n)