// Assignment code here
//define variables

var lowercaseletters="abcdefghijklmnopqrstuvwxyz";
var uppercaseletters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbrchoice="0123456789";
var specialchoice="!@#$%^&*()-+=";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {              //writePassword function executes generatePassword function then passes answer to html to appear on screen
  var password = generatePassword();   //use function generatePassword to get parameters and compute password
  var passwordText = document.querySelector("#password");  //pass the new password back to html

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);  //when user presses "Generate Password" button on the screen, writePassword function execute

    var lowerYes = 0;  //initialize variables before executing the function
    var upperYes = 0;
    var numbrYes = 0;
    var specialYes = 0; 
    passwordLength = 0;
    passwordText = "";

function generatePassword() {
    var passwordLength = window.prompt("Please enter password length (8-128 characters)");  //prompt box appears to collect password parameters from user
        if (passwordLength < 8 || passwordLength > 128 || !passwordLength) {
          window.alert("Your entry was invalid. Please try again.");
          return;
         }  
        
    var lower = window.prompt("Password should include lowercase letters? Y or N");
        lower = lower.toUpperCase();
        if (lower != null) {
            return;
            } else if { (lower === "Y");    
                 var lowerYes = 1;
        }

        var upper = window.prompt("Password should include uppercase letters? Y or N");
        upper = uppercaseletters.toUpperCase();
        if (upper != null) {
            return;
            } else if { (upper === "Y");    
                 var upperYes = 1;
        }
        
        var numbr = window.prompt("Password should include numbers? Y or N");
        if (numbr != null) {
            return;
            } else if { (numbr === "Y");    
                 var numbrYes = 1;
        }
        
        var special = window.prompt("Password should include special characters? Y or N");
            if (special != null) {
                return;
            } else if { (special === "Y");
                var specialYes = 1;
        }
        
    }

    if ((lower === "N") && (upper === "N") && (numbr === "N") && (special === "N")) {
     window.alert("You must choose at least one character type");
        return;
    }


    if ((lowerYes = 1) && (upperYes =  1) && (numbrYes = 1) && (specialYes = 1)) {       //make array of chosen password parameters
        passwordRange = lowercaseletters.concat(uppercaseletters, numbrchoice, specialchoice);

        } else if  { ((lowerYes = 1) && (upperYes =  1) && (numbrYes = 1) && (specialYes = 0))  
            passwordRange = lowercaseletters.concat(uppercaseletters, numbrchoice); 

             } else if { ((lowerYes = 1) && (upperYes =  1) && (numbrYes = 0) && (specialYes = 0)) 
             passwordRange = lowercaseletters.concat(uppercaseletters); 

              } else { 
                passwordRange = lowercaseletters;        
        }



    for (let i = 0; i <= passwordLength; i ++) {   //calculate the password and store the result in variable passwordText referenced on line 20
        var passwordText = Math.floor(Math.random() * passwordRange.length);
    }

