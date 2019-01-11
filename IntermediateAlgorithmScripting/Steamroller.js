function steamrollArray(arr) {
  // I'm a steamroller, baby
let flatArr = arr.flat(Infinity);
console.log(JSON.stringify(flatArr));
return flatArr;
}

steamrollArray([1, [], [3, [[4]]]]);