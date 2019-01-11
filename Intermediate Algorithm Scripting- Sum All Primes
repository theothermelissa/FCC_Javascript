function sumPrimes(num) {
  var mightBePrimes = [];
  var primes = [];
  for (var i = 2; i <= num; i++) {
    mightBePrimes[i] = true;
  }
  var limit = Math.sqrt(num);
  console.log(limit);
  for (var i = 2; i <= limit; i++) {
    if (mightBePrimes[i] === true) {
      for (var j = i * i; j <= num; j += i) {
        mightBePrimes[j] = false;
        // console.log(mightBePrimes);
      }
    }
  }
  for (var i = 2; i <= num; i++) {
    if (mightBePrimes[i] === true) {
      primes.push(i);
      console.log(primes);
    }
  }
  let sumOfPrimes = arr => arr.reduce((a,b) => a + b, 0);
  console.log(sumOfPrimes(primes));
  return(sumOfPrimes(primes));
}

sumPrimes(10);