function myReplace(str, before, after) {
  let arrFromStr = str.split(" ");
  console.log(arrFromStr);
  let cap = /[A-Z]/;
  let targetIndex = arrFromStr.indexOf(before);
  console.log(targetIndex);
  let arrFromBefore = before.split("");
  let arrFromAfter = after.split("");
  console.log(arrFromAfter);
  console.log(arrFromBefore);
  let newArr = arrFromStr.splice(0, targetIndex);
  console.log(newArr);
  let secondNewArr = arrFromStr.splice(1);
  console.log(secondNewArr);
  if (cap.test(arrFromBefore[0])) {
    let newChar = arrFromAfter[0].toUpperCase();
    console.log(newChar);
    arrFromAfter.shift();
    arrFromAfter.unshift(newChar);
    let newAfter = arrFromAfter.join("");
    console.log(newAfter);
    let newStr = (newArr.concat(newAfter, secondNewArr)).join(" ");
    console.log(newStr);
    return newStr;
  } else {
    let otherNewStr = (newArr.concat(after, secondNewArr)).join(" ");
    console.log(otherNewStr);
    return otherNewStr;
  }

  
  
  
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");