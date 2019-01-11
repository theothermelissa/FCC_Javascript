function sumFibs(num) {
  function findLength(p){  
    let x = 0, y = 1, z = 1;
    let ans = 0;
    while (z <= p) {
      z = x + y;
      ans++;
      x = y;
      y = z;
    }
    return ans;
  }
  let fibArray = [1, 1];
  let a = 1, b = 1, f = 1;
  let sum = 0;
  console.log(sum);
  let length = findLength(num)-2;
  console.log(length);
  for(var i = 0; i < length; i++){
      f = a + b;
      a = b;
      b = f;
      fibArray.push(f);
  }
  console.log(fibArray);
  for (var e = 0; e < fibArray.length; e++){
    console.log(fibArray[e]);
    if (fibArray[e] % 2 === 1){
      sum += fibArray[e];
      // console.log(sum);
    }
  }
  console.log(sum);
  return sum;
  // return num;
}

sumFibs(75025);