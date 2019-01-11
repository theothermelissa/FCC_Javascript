function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  // console.log("1: ",arr1);
  // console.log("2: ",arr2);
  // console.log("index of 5: ",arr2.indexOf(5));

  // console.log("FilteredArr1: ",filteredArr1);  
  let filteredArr1 = arr1.filter(val => {
    return (arr2.indexOf(val)) <0;
  });
  let filteredArr2 = arr2.filter(val => {
    return (arr1.indexOf(val)) <0;
  });
  // console.log("filteredArr2: ",filteredArr2);
  newArr = [...filteredArr1].concat([...filteredArr2]);
  console.log("newArr: ",newArr);

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);