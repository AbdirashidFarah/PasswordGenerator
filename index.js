const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generateBtn = document.getElementById("generate");
let randomPass1 = document.getElementById("password1");
let randomPass2 = document.getElementById("password2");
let passwordlength = 12;

function getRandomCharacters() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar];
}
 
function generatePassword() {
    let password = "";
    for (let i = 0; i < passwordlength; i++) {
        password += getRandomCharacters();
        }
        return password;
        }

function setpass() {
    randomPass1.textContent = generatePassword();
    randomPass2.textContent = generatePassword();
}

generateBtn.addEventListener("click", setpass)  //generate password on click
console.log("Here is a random password: ", generatePasswordOne)









