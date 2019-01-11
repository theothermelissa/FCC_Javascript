function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  let spreadStr = str.replace(/([A-Z])|_/g, ' $1');
  console.log(spreadStr);
  let arrFromStr = spreadStr.split(/\W+|\s/g);
  console.log(arrFromStr);
  if (arrFromStr[0] === "") {
    arrFromStr.shift();
  }
  console.log(arrFromStr);
  let lowerArr = arrFromStr.map(x => x.toLowerCase());
  console.log(lowerArr);
  let spinalStr = lowerArr.join("-");
  console.log(spinalStr);
  return spinalStr;
}

spinalCase('AllThe-small Things');

/* a word is preceded either by a nonalphanumeric character, a capital letter, or a space*/