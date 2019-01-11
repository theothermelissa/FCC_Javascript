function destroyer(arr, ...arg) {
  // Remove all the values
  console.log(arr);
  console.log(arg);
  let numTargets = arg.length;
  console.log(numTargets);
  
let survivors = arr.filter(val => { 
  return(arg.indexOf(val) <0);
});
console.log(survivors);

}

destroyer([2, 3, 2, 3], 2, 3);
