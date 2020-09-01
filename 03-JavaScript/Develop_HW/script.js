//Assignment code
var generateBtn = document.querySelector("#generate");

//Declare password global variable
var password = (' ');

//Call to writePassword on page which invokes generatePassword function
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

};

//Main javascript to create password possibly composed of upper, lower, numeric, and special characters
function generatePassword() {
  //Create arrays for each possible character type
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const special = "#$%;&'()*+,-./:;<=>?@[\]^_`{|}~";

    // var password = (' ');

    //Keep prompting user if length is not between 8 and 128
    do {
      var length = prompt("Enter length of password between 8 and 128");
    }  while ((length < 8) || (length > 128));

    //Keep prompting user if at least one character type is not chosen
    do {
      var cnfrmupper = confirm("Would you like upper case in password?");
      var cnfrmlower = confirm("Would you like lower case in password?");
      var cnfrmnumbers = confirm("Would you like numbers in password?");
      var cnfrmspecial = confirm("Would you like special characters in password?");
      var pwdChars = [];
    } while ((cnfrmupper === false) && (cnfrmlower === false) && (cnfrmlower === false) && (cnfrmspecial === false));

    //Append array given user choices from confirms above
    if(cnfrmupper) {
      pwdChars = [...pwdChars,...upper];
    };
    if(cnfrmlower) {
      pwdChars = [...pwdChars,...lower];
    };
    if(cnfrmnumbers) {
      pwdChars = [...pwdChars,...numbers];
    };  
    if(cnfrmspecial) {
      pwdChars = [...pwdChars,...special];
    };
    // console.log(pwdChars);
    
    //Build password given length chosen and random pick of character type array
    for (i = 0; i < length; i++) {		
      var randomNumber = Math.floor(Math.random() * pwdChars.length);
      console.log(randomNumber);
      var randomPick = pwdChars[randomNumber];
      // console.log(randomPick);
      password = password + randomPick;
      // console.log(randomPick);
    }; 
  };

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//copy to clipboard
function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("Copy");
  alert("Copied to Clipboard");
}