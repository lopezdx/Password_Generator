var possibleCharacters = [];
var generatedPassword = [];
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

// Creates a prompt box which takes in text input.
function promptPW() {

    var pwLength = prompt("Please enter a password length between 8 & 128 characters:");

    var charLow = confirm("Does your password need to include lowercase characters?");

    var charCap = confirm("Does your password need to include uppercase characters?");

    var charNum = confirm("Does your password need to include numerical characters?");

    var charSym = confirm("Does your password need to include special characters?");
// Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false

if (
    charLow === false && 
    charCap === false &&
    charNum === false &&
    charSym === false 
) {
    alert("You must select at least one type of character!");

    return;
}
 //Returns user to first prompt if they say 'no/cancel' to all character type selections. 
 if(!charCap && !charLow && !charNum && !charSym){
    alert("You must select at least one type of character to use in your password!")
  }
}
// Function for getting a random element from an array

function randomChar() {
    if (charCap){
        possibleCharacters= possibleCharacters.concat(upperCasedCharacters)
       }
       if(charLow){
        possibleCharacters= possibleCharacters.concat(lowerCasedCharacters)
       }
       if (charNum){
         possibleCharacters = possibleCharacters.concat(numericCharacters)
       }
       if (charSym){
        possibleCharacters = possibleCharacters.concat(specialCharacters)
       }
     
       console.log(possibleCharacters)

}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

