function convertToRoman(num) {
 let numerals = {
   1: "I",
   4: "IV",
   5: "V",
   9: "IX",
   10: "X",
   40: "XL",
   50: "L",
   90: "XC",
   100: "C",
   400: "CD",
   500: "D",
   900: "CM",
   1000: "M"
 };

  let brokeAndBackwards = num.toString().split("").reverse().map(Number);
  let length = brokeAndBackwards.length; 
  var working = [];
  let specialsInteger;
  var specialsArray = [];
  var specials;
  var ones = brokeAndBackwards[0];
  var fives;
  var tens = brokeAndBackwards[1]*10;
  var fifties;
  var hundreds = brokeAndBackwards[2]*100;
  var fiveHundreds;
  var thousands = brokeAndBackwards[3]*1000;
  var ans;

  //ones
  if (numerals.hasOwnProperty(ones)) {
    working.unshift(numerals[ones]);
    console.log(JSON.stringify(working));
  } else if (ones < 4) {
    for (var i = 1; i <= ones; i++) {
      working.unshift(numerals[1]);
      console.log(JSON.stringify(working));
    }
  } else if (ones < 9){
    let onesOverFive = ones - 5;
    for (i = 1; i <= onesOverFive; i++) {
      working.unshift(numerals[1]);
    }
    working.unshift(numerals[5]);
    console.log(JSON.stringify(working));
  }
  //tens
  if (numerals.hasOwnProperty(tens)) {
    working.unshift(numerals[tens]);
    console.log(JSON.stringify(working));
  } else if (tens < 40) {
    for (i = 1; i <= tens/10; i++) {
      working.unshift(numerals[10]);
      console.log(JSON.stringify(working));
    }
  } else if (tens < 90){
      let tensOverFifty = tens - 50;
      for (i = 1; i <= tensOverFifty/10; i++) {
        working.unshift(numerals[10]);
      }
      working.unshift(numerals[50]);
      console.log(JSON.stringify(working));
    }
  //hundreds
  if (numerals.hasOwnProperty(hundreds)) {
    working.unshift(numerals[hundreds]);
    console.log(JSON.stringify(working));
  } else if (hundreds < 400) {
    for (i = 1; i <= hundreds/100; i++) {
      working.unshift(numerals[100]);
      console.log(JSON.stringify(working));
    }
  } else if (hundreds < 900){
      let hundredsOverFiveHundred = hundreds - 500;
      for (i = 1; i <= hundredsOverFiveHundred/100; i++) {
        working.unshift(numerals[100]);
      }
      working.unshift(numerals[500]);
      console.log(JSON.stringify(working));
    }
    //thousands
    if (numerals.hasOwnProperty(thousands)) {
    working.unshift(numerals[thousands]);
    console.log(JSON.stringify(working));
  } else {
    for (i = 1; i <= thousands/1000; i++) {
      working.unshift(numerals[1000]);
      console.log(JSON.stringify(working));
    }
  }

  ans = working.join("");
  console.log(JSON.stringify(ans));
  return ans;

  }

convertToRoman(501);