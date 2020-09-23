// Assignment Code
var generateBtn = document.querySelector("#generate");

// Categories of characters
const charCat = ["upper case letters", "lower case letters",
  "numbers", "special characters"];
const charsByCat = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "abcdefghijklmnopqrstuvwxyz", "0123456789",
  " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"];

// Password template
var passwordLen = 0;
var possibleChar = "";

function generatePassword() {

  // Always creates template when run for the first time
  if (passwordLen == 0) {
    newTemp();
  }

  // Checks if user wants to reuse the previous template
  else {
    if (confirm("Would you like to generate another password "
      + "with the same parameters?") == false) {
      newTemp();
    }
  }
  
  // Adds a random character from the list of possible characters
  // until the password is the length specified by the user
  var output = "";
  for (var i = 0; i < passwordLen; i++) {
    output = output + possibleChar[Math.floor(Math.random() * 
      possibleChar.length)]
  }
  return output;
}

// Prompts the user for the password parameters
function newTemp() {

  passwordLen = 0;
  possibleChar = "";

  // Loops until a proper length is given.
  while (passwordLen == 0) {
    passwordLen = parseInt(prompt("What is the length of the password " +
      "(between 8 and 128)?"));
    if (!(passwordLen >= 8 && passwordLen <= 128)) {
      passwordLen = 0;
    }
  }

  // Loops over the character categories, asking for each
  for (var j = 0; j < charCat.length; j++) {
    if (confirm("Would you like your password to include " + charCat[j] +
      "?")) {
        possibleChar = possibleChar + charsByCat[j];
    }
  }

  // Makes sure at least one category of characters is selected
  if (possibleChar.length < 1) {
    passwordLen = 0;
    alert("Cannot create password (no characters selected).");
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password.length > 0) {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);