function palindrome(str) {
  // Good luck!
  let lowerCase = str.toLowerCase();
  let lettersRegEx = /[A-Za-z0-9]/ig;
  let justLetters = lowerCase.match(lettersRegEx);
  var length = justLetters.length;
  var reversed = justLetters.slice().reverse();
  let matches = justLetters.filter(val => {
    return(justLetters.indexOf(val) === reversed.indexOf(val));
  });
  console.log(matches);
  if (matches.length === justLetters.length) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}



palindrome("Eye");