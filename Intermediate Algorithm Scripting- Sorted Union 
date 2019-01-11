function uniteUnique(...arr) {
let flatArr = arr.flat([1]);
console.log(JSON.stringify(flatArr));
// console.log(flatArr.length);
let newArr = [];
newArr.push(flatArr[0]);
flatArr.map(function(val) {
  var isInNewArray = newArr.includes(val);
  if (!isInNewArray){
    newArr.push(val);
  }
  console.log(newArr);
})
return newArr;
// for (var i=0; i<flatArr.length; i++) {
//   console.log(flatArr[i]);
//   if (newArr.includes(flatArr[i])) {
//     i++;
//   }else{
//     newArr.push(flatArr[i]);
//     console.log(newArr);
//     i++;
//   }
  // console.log(newArr);
// }


}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);