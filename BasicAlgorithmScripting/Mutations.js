function mutation(arr) {
  let target = arr[0].toLowerCase();
  let test = arr[1].toLowerCase();
  let result;
  for (var i=0; i<test.length; i++) {
    if (target.indexOf(test[i]) < 0){
    result = false;
    console.log(result);
    break;
  }
 {
    result = true;
  }
}
  console.log(result);
  return result;
}

mutation(["hello", "neo"]);