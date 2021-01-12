// Assignment Code
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword() {
  //creating constants for valid char arrays
  const lowerCaseLettersArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  const upperCaseLettersArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  const numericalCharsArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
  const specialCharsArr = [' ', '!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', '"', "'"]

  //instantiate arrayOfValidCharacters that will be added to.
  let arrOfValidChars = [];

  //Starting password length input
  let length = prompt("Please input the desired length of your new password between 5 and 128");
  //cast length to int
  length = parseInt(length)

  //Do this if and only if the starting input was outside acceptable bounds.
  //Then repeats until the input is within bounds, and continues.
  //Also acts to prevent non-number characters from being accepted
  while (!(length >= 5 && length <= 128)) {
    alert("Inputted length outside of acceptable bounds, please try again")
    length = prompt("Please input the desired length of your new password between 5 and 128");
  }

  //Ask about which sets of characters should be valid.
  //Needs to be a series of if statements, or doesn't work.
  if (confirm("Should this password contain lower case alphabetical characters?")) {
    arrOfValidChars = arrOfValidChars.concat(lowerCaseLettersArr);
  }
  if (confirm("Should this password contain upper case alphabetical characters?")) {
    arrOfValidChars = arrOfValidChars.concat(upperCaseLettersArr);
  }
  if (confirm("Should this password contain numerical characters?")) {
    arrOfValidChars = arrOfValidChars.concat(numericalCharsArr);
  }
  if (confirm("Should this password contain special characters?")) {
    arrOfValidChars = arrOfValidChars.concat(specialCharsArr);
  }

  //if arrOfValidChars is not empty we continue to generate the password.
  //Else the program stops and tells the user that they need to choose at least one valid character set
  if (arrOfValidChars.length > 0) {

    //instantiate variables
    let pwResult = '';
    let ranNum;

    //Loop length times
    //This can be condensed to a one liner, but that would be hard to read.
    for (let i = 0; i < length; i++) {
      //random gen
      ranNum = Math.floor(Math.random() * arrOfValidChars.length);
      //Add char at random index to pwresult.
      pwResult = pwResult.concat(arrOfValidChars[ranNum]);
    };

    //just for confirmation it is the correct length.
    if (pwResult.length !== length) {
      alert("Password not correct length!! expected " + length + " was actually " + pwResult.length)
      console.log("Password not correct length!! expected " + length + " was actually " + pwResult.length)
    }

    return pwResult;

  } else {
    alert("You must choose at least 1 valid character set, please try again.")
    //Reset text in box, though it'll be black instead of grey now...
    //Unsure how to fix that.
    return "Your secure password";
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
