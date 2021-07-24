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

function getPasswordOptions() {
  //Prompts the user to input a number. 
  var lengthPrompt = parseInt(prompt("Choose a password between 10 and 64 characters"));
    //sets conditions for acceptable numbers and prompts the user if wrong inputs are set
    if (lengthPrompt<10 || lengthPrompt>64 || isNaN(lengthPrompt)) {
      var wrongInput = alert("only choose a number between 10 and 64")
      wrongInput;
     return;
    }

      else {
        console.log(lengthPrompt);
       
    }
    //Prompts the user to input the types of characters that they want to use
    //Went this route because it results in less prompts on the screen. 
    //Method is case insensitive, but has a flaw in that if a comma is set next to a phrase, 
    //or if the phrase is misspelt the program fails to let the user know.
    var typePrompt = prompt("What types of characters do you want to include?: lowercase, uppercase, numeric, and/ or special").toLowerCase();
      if (typePrompt.includes("lowercase")) {
        var hasLowerCasedCharacters= true;
        //logged the characters to keep track of which sets are being used
        console.log(lowerCasedCharacters);
        
      }
      //Used booleans to activate the conditons
      if (typePrompt.includes("uppercase")) {
        var hasUpperCasedCharacters=true;
        console.log(upperCasedCharacters);
       
        
      }
      //Used booleans to activate the conditons
      if (typePrompt.includes("numeric")) {
        var hasNumericCharacters = true;
        console.log(numericCharacters);
        
        
      }
      //Used booleans to activate the conditons
      if(typePrompt.includes("special")) {
        var hasSpecialCharacters = true;
        console.log(specialCharacters);
        
      }
    // Results from the previous prompts are compiled in this object
    var passwordOptions = {
      length: lengthPrompt,
      hasSpecialCharacters: hasSpecialCharacters,
      hasNumericCharacters: hasNumericCharacters,
      hasLowerCasedCharacters: hasLowerCasedCharacters,
      hasUpperCasedCharacters: hasUpperCasedCharacters, 

      };
      //ends the function
      return passwordOptions;
    
};

// Function for getting a random element from an array
//Will work with any of our arrays
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randomIndex];
  
  return randElement;


}

// Function to generate password with user input
function generatePassword() {
  //calls on the results of getPasswordOptions to set the value of options
  var options = getPasswordOptions();
  var result =  [];
  var possibleCharacters= [];
  var guaranteedCharacters = [];

  //checks if options has the value of "True" for hasSpecialCharacters
  if (options.hasSpecialCharacters) {
    //merges the "possibleCharacters" and "specialCharacters" arrays
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    //randomizes and adds special characters to the end of the new array "guaranteedCharacters"
    guaranteedCharacters.push(getRandom(specialCharacters));

  }

  //Same process as special characters
  if (options.hasNumericCharacters){
    possibleCharacters= possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  //Same process as special characters
  if (options.hasLowerCasedCharacters){
    possibleCharacters= possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }

  //Same process as special characters
  if (options.hasUpperCasedCharacters){
    possibleCharacters.push(getRandom(upperCasedCharacters));
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }

  //For each individual character within the prompted length of the password, 
  //get a random character from the list of possible characters, 
  //and adds it to the end of the variable "possibleCharacter"
  for (var i=0; i< options.length; i++){
    var possibleCharacter= getRandom(possibleCharacters);
    //the possibleCharacters are then added to the end of the "result" array
    result.push(possibleCharacter);
  }
  //For the length of the "guaranteedCharacters" array add each guaranteed character to the result array
  //Adds in at least one guaranteed character to the result 
  for (var i=0;i<guaranteedCharacters.length;i++){
    result[i]=guaranteedCharacters[i];
  }
  //returns the "result array as a single string and returns it to writePassword()"
  //Essentially the final password 
  return result.join('');
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

