function translatePigLatin(str) {
  let vowel = /[aeiou]/;
  let consonant = /[^aeiou]/;
  let arrFromStr = str.split("");
  let firstChar = str[0];
  let consArr = [];
  var i=0;
  while (i < str.length) {
      if (consonant.test(str[i])) {
        consArr.push(str[i]);
        // console.log(consArr);
      } else {
        break;
      }
      i++;
  }
  if (vowel.test(firstChar)) {
    arrFromStr.push("way");
  } 
  else {
    let cons = consArr.join("");
    // console.log(cons);
    // console.log(arrFromStr);
    arrFromStr.splice(0, cons.length);
    arrFromStr.push(cons+"ay");
    // console.log(arrFromStr);
    }
  let newStr = arrFromStr.join("");
  console.log(newStr);
  return newStr;
}

translatePigLatin("glove");