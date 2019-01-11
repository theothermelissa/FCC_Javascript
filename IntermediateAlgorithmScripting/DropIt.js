function dropElements(arr, func) {
  // Drop them elements.
  

  // console.log(func(arr[2]));
  console.log(JSON.stringify(arr)); 
    let i = 0;
    if (func(arr[i]) === true) {
      return arr;
    } else {
    do {
      arr.shift();
    } while (func(arr[i]) === false);
    }
    
    console.log(JSON.stringify(arr));

  return arr;

}

dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;});