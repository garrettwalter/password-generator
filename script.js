// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input, user is prompted with choice of password length
function writePassword() {
  var userLength = prompt("Choose password length (must be between 8-128)", "0");
  var passwordLength = parseInt(userLength);  
  var password = generatePassword(passwordLength);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

// parts of the function 'generatePassword' was found on https://www.codegrepper.com/code-examples/javascript/javascript+password+generator+example
  function generatePassword(passwordLength) {
    var numberChars = "0123456789";
    var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerChars = "abcdefghijklmnopqrstuvwxyz";

    var specChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

    var allChars = numberChars + upperChars + lowerChars + specChars;


    var randPasswordArray = Array(passwordLength);
    randPasswordArray[0] = numberChars;
    randPasswordArray[1] = upperChars;
    randPasswordArray[2] = lowerChars;
    randPasswordArray[3] = specChars;
    randPasswordArray = randPasswordArray.fill(allChars, 4);
    return shuffleArray(
      randPasswordArray.map(function (x) {
        return x[Math.floor(Math.random() * x.length)];
      })
    ).join("");
  }

// this function shuffles the arrays to randomly generate the string
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
}

// when the 'generate password' button is clicked, the user is prompted to chose password length, then a randomly generated password in displayed 
generateBtn.addEventListener("click", function (){
    writePassword();
});
