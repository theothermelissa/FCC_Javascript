function rot13(str) { // LBH QVQ VG!
  var map = {
    "A": "N",
    "B": "O",
    "C": "P",
    "D": "Q",
    "E": "R",
    "F": "S",
    "G": "T",
    "H": "U",
    "I": "V",
    "J": "W",
    "K": "X",
    "L": "Y",
    "M": "Z",
    "N": "A",
    "O": "B",
    "P": "C",
    "Q": "D",
    "R": "E",
    "S": "F",
    "T": "G",
    "U": "H",
    "V": "I",
    "W": "J",
    "X": "K",
    "Y": "L",
    "Z": "M"
  };
  // let lettersRegEx = /[A-Z]g/;
  let arrFromStr = str.split("");
  let endArr = [];
  let ans;
  console.log(JSON.stringify(arrFromStr));
  for (var i = 0; i < arrFromStr.length; i++) {
    let char = arrFromStr[i];
    // console.log(char);
    if (map.hasOwnProperty(arrFromStr[i])) {
      endArr.push(map[char]);
    } else {
      endArr.push(char);
    }
  }
  console.log(endArr);
  ans = endArr.join("");
  console.log(ans);
  return (ans);


}

// Change the inputs below to test
rot13("SERR PBQR PNZC");