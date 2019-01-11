// MY SOLUTION THAT WORKS BUT DOESN'T PASS
function chunkArrayInGroups(arr, size) {
  // Break it up.
  let newArr = [];
  let tempArr = [];
  let newArrLength = arr.length/size;
  // console.log ("length: ",newArrLength);
    for (var a=0; a < newArrLength; a++){
      for (var i=0; i<arr.length; i++) {
          tempArr =arr.splice(0, size);
          // console.log("tempArr: ", tempArr);
      newArr[a] = [tempArr];
      break;
    }
    }
  // console.log("0: ",newArr[0]);
  // console.log("1: ",newArr[1]);
  // console.log("2: ",newArr[2]);
  return newArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4], 2);


//THEIR SOLUTION
 function chunkArrayInGroups(arr, size) {

      var temp = [];
      var result = [];

      for (var a = 0; a < arr.length; a++) {
        if (a % size !== size - 1)
          temp.push(arr[a]);
        else {
          temp.push(arr[a]);
          result.push(temp);
          temp = [];
        }
      }

      if (temp.length !== 0)
        result.push(temp);
      return result;
    }