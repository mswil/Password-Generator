// Assignment code here
function generatePassword() {
  var specialChar = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
  var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerChar = [];
  var numChar = [];

  var pwdCriteria = [];

  for (var i = 0; i < upper.length; i++) {
    lower.push(upper[i].toLowerCase());
  }

  for (var i = 0; i < 10; i++) {
    numChar.push(i.toString());
  }

  //ask how many characters 8-128

  //ask upper

  //ask lower

  //ask numeric

  //ask special
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
