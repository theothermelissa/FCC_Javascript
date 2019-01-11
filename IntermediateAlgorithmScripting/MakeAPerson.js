

// var Person = function(firstName, lastName, age) {

//     var lockedBox = {
//         firstName: undefined,
//         lastName: undefined,
//         age: undefined,
//     };

//     lockedBox.firstName = firstName;
//     lockedBox.lastName = lastName;
//     lockedBox.age = age;

//     this.getFullName = function() {
//         return lockedBox.firstName + " " + lockedBox.lastName;
//     }
    
//     this.setLastName = function(lastName) {
//         lockedBox.lastName = lastName;
//     }
// }

var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    let firstName = firstAndLast.split(" ")[0];
    let lastName = firstAndLast.split(" ")[1];
    let fullName = firstName + " " + lastName;
    
    this.getFirstName = function() {
      console.log(firstName);
      return firstName;
    };
    this.getLastName = function() {
      console.log(lastName);
      return lastName;
    };
    this.getFullName = function() {
      console.log(firstName + " " + lastName);
      return firstName + " " + lastName;
    };
    this.setFirstName = function(first) {
      firstName = first;
      console.log(firstName);
      return firstName;
    };
    this.setLastName = function(last) {
      lastName = last;
      console.log(lastName);
      return lastName;
    };
    this.setFullName = function(newFull) {
      firstName = newFull.split(" ")[0];
      lastName = newFull.split(" ")[1];
      console.log(fullName);
      return fullName;
    };
  
  };
  
  var bob = new Person('Bob Ross');
  bob.getFirstName();
  
  