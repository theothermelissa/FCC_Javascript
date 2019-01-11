function sumAll(arr) {
  console.log(arr);  
  arr.sort(function(a, b) {return a-b});
  console.log(arr);
  let numsLength = arr[1] - arr[0];
  let allNums = [arr[0]];
  console.log(allNums);
  console.log(numsLength);
  for (var i=0; i < numsLength; i++) {
    allNums.push(allNums[i]+1);
    console.log(allNums);
  }
  let answer = allNums.reduce(function(p, c) { return p + c; });
  console.log(answer);
  return answer;
  
  
  // return 1;
}

sumAll([5, 10]);