// Button Generator
var generateBtn = document.querySelector("#generate");

//Radomizers
function randomInt(min, max) {
    if (!max) {
      max = min 
      min = 0
    }
  var random = Math.random()
  return Math.floor(min*(1 - random) + random * max)
}
function randomItem(list) {
  return list[randomInt(list.length)];
}

//Generate random password function
function generatePassword(){
  var userInput = window.prompt("How long do you want the password to be?", "Enter a length");

  var passLength = parseInt(userInput);

  if (userInput === null) {   //if cancel pressed, it will end function
    return
  }

  if ( isNaN(passLength)) { // if not a number, return message
    window.alert("Input was not a number, sorry.");
    return generatePassword()
  }

  if (passLength < 8 || passLength > 128 ) {  //If the length is between parameters
    window.alert("Password must be between 8 and 128 characters long.");
    return generatePassword()
  }
 
  //Confirm selection of character types
  var getNumbers = window.confirm ("Numbers (1, 2, 3, 4, etc.)?");
  var getSpecial = window.confirm("Symbols (!, @, #, etc.)?");
  var getLowercase = window.confirm("LowerCase Letters (a, b, c, etc.)?");
  var getUppercase = window.confirm("Uppercase Letters (A, B, C, etc.)?");

   //Available Characters depending on selection
  var numberArray = ["0","1","2","3","4","5","6","7","8","9"];
  var specialArray = ["!","@","#","$","%","^","&","*","(",")","+","-"];
  var lowercaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var uppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  //Password generator pool
  var selectionPool = []
  if(getNumbers === true){
    selectionPool.push(numberArray);
  }
  if(getSpecial === true) {
    selectionPool.push(specialArray);
  }
  if (getLowercase === true) {
    selectionPool.push(lowercaseArray);
  }
  if (getUppercase === true) {
    selectionPool.push(uppercaseArray);
  }
  if (selectionPool.length === 0) {  // if none were selected
    return generatePassword()
  }
  
  var realPass = ""

  for (var i = 0; i < passLength; i++) {
    var randomArray = randomItem(selectionPool);
    var randomCharacter = randomItem(randomArray);
    realPass += randomCharacter;
  }
  return realPass
}
//Writes realPass into box
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
