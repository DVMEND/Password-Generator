// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var passwordText = document.getElementById("#password");

// Function to prompt user for password options

function getPasswordOptions(){
  generateBtn.addEventListener('click', function() {
    lengthPrompt;
    var lengthPrompt = prompt("Choose a password between 10 and 64 characters")
    if (lengthPrompt<10 || lengthPrompt>64 || isNaN(lengthPrompt)) {
      var wrongInput = alert("only choose a number between 10 and 64")
      wrongInput;
      return;
    }

      else {
        console.log(lengthPrompt);
    }

    var typePrompt = prompt("What types of characters do you want to include?: lowercase, uppercase, numeric, and/ or special").toLowerCase();
    if (typePrompt.includes("lowercase")) {
      console.log(lowerCasedCharacters);
    }
    if (typePrompt.includes("uppercase")) {
      console.log(upperCasedCharacters);
    }
    if (typePrompt.includes("numeric")) {
      console.log(numericCharacters);
    }
    if(typePrompt.includes("special")) {
      console.log(specialCharacters);
    }
    else {
      alert("Choose a valid type of character! No commas or slashes!")
    }

})};

// Function for getting a random element from an array
function getRandom() {
  var item = items[Math.floor(Math.random() * array.length)]
  //passwordText.innerHTML =
    //arr[Math.floor(Math.random() * lowerCasedCharacters.length)];
    //console.log(getRandom);
}

// Function to generate password with user input
function generatePassword() {


}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

//getRandom();
getPasswordOptions()