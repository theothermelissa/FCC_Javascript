function orbitalPeriod(arr) {
  
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var pi = Math.PI;
  var height;
  var axis;
  var oP;
  var ans = [];
  var name;
  for (var i = 0; i < arr.length; i++) {
    name = arr[i]["name"];
    height = arr[i]["avgAlt"];
    console.log(height);
    axis = height + earthRadius;
    console.log(axis);
    oP = Math.round(2*pi*(Math.sqrt((Math.pow(axis, 3))/GM)));
    console.log(oP);
    ans.push(arr[i]);
    delete ans[i]["avgAlt"];
    ans[i]["orbitalPeriod"] = oP;
    console.log(JSON.stringify(ans));
  }
    return ans;

}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);