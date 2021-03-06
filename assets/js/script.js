// Assignment code here
var specialChar = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var upperChar = [];
var lowerChar = [];
var numChar = [];


for (var i = "A".charCodeAt(0); i < "Z".charCodeAt(0); i++) {
  var char = String.fromCharCode(i);
  upperChar.push(char);
  lowerChar.push(char.toLowerCase());
}

for (var i = 0; i < 10; i++) {
  numChar.push(i.toString());
}

function getCharCount() {

  //ask how many characters 8-128
  var num = parseInt(prompt("How many characters? (8-128)"));

  if (isNaN(num) || num < 8 || num > 128) {
    alert("Please enter a number between 8 and 128");
    return getCharCount();
  }

  return num;
}

function gatherCriteria() {
  var pwdCriteria = [];

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
    return gatherCriteria();
  }

  return pwdCriteria;
}

function generatePassword() {

  var num = getCharCount();
  var pwdCriteria = gatherCriteria();

  var password = "";

  while (!validatePassword(password, pwdCriteria)) {
    //start off fresh
    password = "";

    for (var i = 0; i < num; i++) {
      //select character list (upper, lower, numeric, special)
      var characterList = getRandElement(pwdCriteria);
      //select character in character list and add to password
      password += getRandElement(characterList);
    }
  }

  return password;
}

function validatePassword(password, pwdCriteria) {
  var criteriaCount = 0;

  //check to make sure at least one of each requested character type is included
  for (var i = 0; i < pwdCriteria.length; i++) {
    for (var j = 0; j < password.length; j++) {
      if (pwdCriteria[i].includes(password[j])) {
        criteriaCount++;
        break;
      }
    }
  }

  return criteriaCount === pwdCriteria.length;
}

function getRandElement(list) {
  return list[Math.floor(Math.random() * list.length)];
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
