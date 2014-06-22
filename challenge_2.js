 exports.sumOfEvenFibonacciNumbers = function(n){
  
  var sum = 0;
  var fib1 = 1;
  var fib2 = 1;
  var fibSum = 2;

for(var i = 0; fibSum < n; i++ ) {

  // while (fibSum < n) {
    if ((fibSum % 2) === 0) {
      sum += fibSum;
      }
    fib2 = fib1;
    fib1 = fibSum;
    fibSum += fib2;
  }
    return sum;
 
 console.log(sumOfEvenFibonacciNumbers(10));
  };
  
