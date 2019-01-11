function telephoneCheck(str) {

let ValidWithCountry = /(^\d *\(\d{3}\) *\d{3}[ |\-]*\d{4}$)|(^\d[ |\-]*\d{3}[ |\-]*\d{3}[ |\-]*\d{4}$)/;
let ValidSansCountry = /(^\d{3}[ |\-]*\d{3}[ |\-]*\d{4}$)|(^\(\d{3}\) *\d{3}[ |\-]\d{4}$)/;
let justDigitsRegex = /\d/g;

let justDigits = str.match(justDigitsRegex).map(Number);
let withCountryMatches = str.match(ValidWithCountry);
let sansCountryMatches = str.match(ValidSansCountry);
let withCountryTest = ValidWithCountry.test(str);
let sansCountryTest = ValidSansCountry.test(str);

console.log("Number of digits: ",justDigits.length);
console.log("JustDigits: ", JSON.stringify(justDigits));

if (justDigits.length === 10) {
  console.log("Valid Sans Country: ", sansCountryTest, sansCountryMatches);
    if (sansCountryTest != true) {
      console.log(false);
      return false;
      } else {
      console.log(true);
      return true;
      }
} else if (justDigits.length === 11) {
  console.log("Valid W/ Country: ", withCountryTest, withCountryMatches);
    if (justDigits[0] === 1) {
      if (withCountryTest === true) {
        console.log(true);
        return true;
      } else {
        console.log(false);
        return false;
      }
      } else {
        console.log(false);
        return false;
    }
  } else {
    console.log(false);
    return false;
  }

}

telephoneCheck("555-555-5555");
