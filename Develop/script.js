// When I click the button, I am presented with a series of prompts for password criteria.

// When prompted for password criteria, then I select which criteria to include in the password. 

// When prompted for the length of the password, then I choose a length of atleast 8 characters and no more than 128 characters.

// When asked for character types to include in the password, Then I confirm wether or not to include lowercase, uppercase, numeric, and/or special characters.

// When I answer each prompt, then my input should be validated and at least one character type should be selected.

// When all prompts are answered, then a password is generated that matches the selected criteria.

// when the password is generated, then the password is either displayed in an alert or written to the page.

// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// TODO: Create variables with arrays for Symbols, Numbers, Uppercase letters, and Lowercase letters.

// Prompts and variables for password criteria
var passwordLength;
var symbols = ["!", "#", "$", "%", "&", "'", "()", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "@", "\", "^""];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userChoices;

var Numbers;
var Symbols;
var Lowercase;
var Uppercase;
var password = []
var passwordBlank = []
// This function allows the generated password to be seen on the user's screen.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}


// Add event listener to generate button
// When you 'click' the Generate Password button, the prompts will appear for user.
generateBtn.addEventListener("click", writePassword);


// TODO: create a function that will go through all the possible outcomes a user may decide. Use conditional statements for all the criteria. 

// Start of the function
function generatePassword() {
  passwordLength = prompt("Enter a password length between 8 and 128")
  console.log("Password length " + passwordLength);


  if(passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Oops! Please enter in a number between 8 and 128!");
    console.log("Password length " + passwordLength);
  // Prompts for criteria selection for the user.
  } else { 
    Symbols = confirm("Do you want to use symbols?");
    console.log("Symbols " + Symbols);
    Numbers = confirm("Do you want to use numbers?");
    console.log("Numbers " + Numbers);
    Uppercase = confirm("Do you want to use uppercase letters?");
    console.log("Uppercase " + Uppercase);
    Lowercase = confirm("Do you want to use lowercase letters?");
    console.log("Uppercase " + Lowercase);

  };
 
      // Alert message that will appear if no options are selected.
  if (!Lowercase && !Uppercase && !Numbers && !Symbols) {
    userChoices = alert("You must select at least 1 option for a random password to generate!");

  // If user selects all 4 of the options, this function takes place.
  } else if (Lowercase && Uppercase && Numbers && Symbols) {
    userChoices = lowercase.concat(uppercase, numbers, symbols);
    console.log(userChoices);
  }
  // If user selects 3 of the options, this function takes place.
  else if (Lowercase && Uppercase && Numbers) {
    userChoices = lowercase.concat(uppercase, numbers);
    console.log(userChoices);
  }
  else if (Lowercase && Uppercase && Symbols) {
    userChoices = lowercase.concat(uppercase, symbols);
    console.log(userChoices);
  }
  else if (Lowercase && Numbers && Symbols) {
    userChoices = lowercase.concat(numbers, symbols);
    console.log(userChoices);
  }
  else if (Uppercase && Numbers && Symbols) {
    userChoices = uppercase.concat(numbers, symbols);
    console.log(userChoices);
  }
  // If user selects 2 of the options, this function takes place.
  else if (Lowercase && Uppercase) {
    userChoices = lowercase.concat(uppercase);
    console.log(userChoices);
  }
  else if (Lowercase && Numbers) {
    userChoices = lowercase.concat(numbers);
    console.log(userChoices);
  }
  else if (Lowercase && Symbols) {
    userChoices = lowercase.concat(symbols);
    console.log(userChoices);
  }
  else if (Uppercase && Numbers) {
    userChoices = uppercase.concat(numbers);
    console.log(userChoices);
  }
  else if (Uppercase && Symbols) {
    userChoices = uppercase.concat(symbols);
    console.log(userChoices);
  }
  else if (Numbers && Symbols) {
    userChoices = numbers.concat(symbols);
    console.log(userChoices);
  }
  // If user selects only one of the options, this function takes place.
  else if (Lowercase) {
    userChoices = lowercase;
    console.log(userChoices);
  }
  else if (Uppercase) {
    userChoices = uppercase;
    console.log(userChoices);
  }
  else if (Numbers) {
    userChoices = numbers;
    console.log(userChoices);
  }
  else if (Symbols) {
    userChoices = symbols;
    console.log(userChoices);
  };
  
  // The process in calculating the User's password.
  for (var i = 0; i < passwordLength; i++) {
    var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordBlank.push(allChoices);
    console.log(allChoices);
  }

  // Created option for if the password is blank then no message will appear.
  var password = passwordBlank.join("");
  console.log(" " + password);
  return password;
  
}













