function truthCheck(collection, pre) {
  // Is everyone being true?
let ans = true;
for (var i = 0; i < collection.length; i++) {
console.log(JSON.stringify(collection[i][pre]));  
if (!collection[i][pre])  {
  console.log("Gotcha!!")
  ans = false;
}
}
console.log(ans);
return ans;
  

}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");