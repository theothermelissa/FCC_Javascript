function getIndexToIns(arr, num) {
  let ans;
  let endVal;
  let length;
  if (arr.length === 0) {
      ans = 0;
      // console.log("it's empty.");
      }
  else {
    arr.sort(function(a, b){return b - a});
    arr.reverse();
    // console.log("sorted array: ", arr);
    endVal = arr[arr.length-1];
    // console.log(endVal);
    if (endVal < num) {
      ans = arr.length;
      // console.log("found it: ", ans);
      } 
    else {
      for (let i = 0; i < arr.length; i ++) {
        // console.log("checking: ", arr[i]);
        if (arr[i] >= num) {
          ans = i;
          // console.log("found it: ", ans);
          break;
          } 
        }
      }
    }
   
  return ans;
}

getIndexToIns([20, 50, 90, 25, 30], 50);