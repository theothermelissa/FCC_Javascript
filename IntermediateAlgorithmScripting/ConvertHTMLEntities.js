function convertHTML(str) {
  let conversionObject = ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": "&apos;",
    // "&": "bob",
    // "<": "fred",
    // ">": "susan",
    // '"': 'mike',
    // "'": "april",
  });
  let isSpecialRegex = /&|<|>|"|'/g;
  console.log(str.match(isSpecialRegex));
  let arrFromStr = str.split("");
  let newArr = [];
  function transform(char){
    let newChar = conversionObject[char];
    console.log(newChar);
    return newChar;
  } 
  // transform('"');
  for (var i=0; i<arrFromStr.length; i++){
    let target = arrFromStr[i];
    // console.log(target);
    if (conversionObject.hasOwnProperty(target)){
      newArr.push(transform(target));
    } else{
      newArr.push(target);
    }
  }
    console.log(newArr);
  let newStr = newArr.join('');
  console.log(newStr);
  return newStr;
}

convertHTML("Hamburgers < Pizza < Tacos");