// Assignment code here

// When i click the button, I am presented with a series of prompts for password criteria.

// When prompted for password criteria, then i select which criteria to include in the password. 

// When prompted for the length of the password, then i choose a length of atleast 8 characters and no more than 128 characters.

// When asked for character types to include in the password, Then i confirm wether or not to include lowercase, uppercase, numeric, and/or special characters.

// When i answer each prompt, then my input should be validated and at least one character type should be selected.

// When all prompts are answered, then a password is generated that matches the selected criteria.

// when the password is generated, then the password is either displayed in an alert or written to the page.








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