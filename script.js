// Assignment code here
function generatePassword() {
  var specialChar = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
  var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerChar = [];
  var numChar = [];

  var pwdCriteria = [];

  for (var i = 0; i < upperChar.length; i++) {
    lowerChar.push(upperChar[i].toLowerCase());
  }

  for (var i = 0; i < 10; i++) {
    numChar.push(i.toString());
  }

  //ask how many characters 8-128
  var num = parseInt(prompt("How many characters? (8-128)"));
  if (num < 8 || num > 128) {
    num = parseInt(prompt("Please enter a number between 8 and 128"));
  }

  //ask upper
  confirm("Do you want uppercase letters?") && pwdCriteria.push(upperChar);

  //ask lower
  confirm("Do you want lowercase letters?") && pwdCriteria.push(lowerChar);

  //ask numeric
  confirm("Do you want numbers?") && pwdCriteria.push(numChar);

  //ask special
  confirm("Do you want special characters?") && pwdCriteria.push(specialChar);

  //check to see that at least one criterion was chosen
  if (!pwdCriteria.length) {
    alert("You must select a least one character type");
    generatePassword();
  }
  var password = "";

  for(var i = 0; i < num; i++) {
    //select character type
    var characters = pwdCriteria[Math.floor(Math.random()*pwdCriteria.length)];
    console.log(characters);
    password += characters[Math.floor(Math.random() * characters.length)];
    console.log(password);
  }

  return password;
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
