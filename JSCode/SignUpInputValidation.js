function controlSubmitStatus() {
    if (userIDValidation() &&
        passwordValidation() &&
        emailValidation() &&
        zipCodeValid()) {
            alert("zoort");
        }
}

function userIDValidation() {
    var len = document.getElementById("userID").value;
    var change = document.getElementById("userIDStatus");
 
    if (len.length == 0) {
        change.innerHTML = "This is a required field";
        return false;
    }
    else if (len.length < 5 || len.length > 12) {
        change.innerHTML = "Length should be between 5 and 12";
        return false;
    }
    else if (len.length > 4 && len.length < 12) {
        change.innerHTML = "Looks good!";
        return true;
    }
}

function passwordValidation(){
    var pass = document.getElementById("passwordID").value;
    var txt = document.getElementById("passwordStatus");
    
    if(pass.length < 12) {
        txt.innerHTML = "Minimum 12 characters required";
        return false;
    }
    else if(!anyNumber(pass)) {
        txt.innerHTML = "You don't have any number";
        return false;
    }
    else if (!anyUppercase(pass)) {
        txt.innerHTML = "You don't have any capital letter";
        return false;
    }
    else if (!anyLowercase(pass)) {
        txt.innerHTML = "You don't have any lowercase letter";
        return false;
    }
    else if (!anySpecialCase(pass)) {
        txt.innerHTML = "You don't have any special letter";
        return false;
    }
    else if (pass.length < 14) {
        txt.innerHTML = "Minimum 14 characters is recommended";
    }
    else {
        txt.innerHTML = "Looks good!";
    }
    return true;
}

function emailValidation() {
    var inputEmailAddress = document.getElementById("emailID").value;
    var change = document.getElementById("emailStatus");

    if (inputEmailAddress.length == 0) {
        change.innerHTML = "This is a required field";
        return false;
    }
    else if (!inputEmailAddress.includes("@")) {
        change.innerHTML = "Input should contain @ character";
        return false;
    }
    else if (inputEmailAddress.indexOf("@") == inputEmailAddress.length - 1) {
        change.innerHTML = "Last character cannot be @";
        return false;
    }
    else if (inputEmailAddress.indexOf("@") == 0) {
        change.innerHTML = "First character cannot be @";
        return false;
    }
    else if (atCheckEmail(inputEmailAddress) > 1) {
        change.innerHTML = "More than one @ is not allowed";
        return false;
    }
    else if (!inputEmailAddress.includes(".com")) {
        change.innerHTML = "Mail address ends with .com";
        return false;
    }
    else if (inputEmailAddress.includes(" ")) {
        change.innerHTML = "Mail address cannot have any spaces";
        return false;
    }
    else {
        change.innerHTML = "Looks good!";
        return true;
    }
}

function atCheckEmail(email) {
    var counter = 0;
    for (var i = 0; i < email.length; i++) {
        if (email.charAt(i) == '@') {
            counter++;
        }
    }
    return counter;
}

function nameValidation() {
    var name = document.getElementById("nameID").value;
    var txt = document.getElementById("nameStatus");

    if (anyLowercase() || anyUppercase()) {
        txt.innerHTML = "Looks good!";
        return true;
    }
    return false;
}

function languageValidation(language) {
    var txt = document.getElementById("languageStatus");

    if (language.length > 0) {
        txt.innerHTML = "Looks good!";
        return true;
    }
    txt.innerHTML = "This field is required";
    return false;
}

function zipCodeValid() {
    var zip = document.getElementById("zipCode").value;
    var txt = document.getElementById("zipCodeStatus");

    if(validateZip(zip)) {
        txt.innerHTML = "Looks good";
    }
    else if(!validateZip(zip)) {
        txt.innerHTML = "Looks good";
    }
    else if(zip.length > 6) {
        txt.innerHTML = "Looks good";
    }
}

function validateZip(character) {
    var bol = true;
    var str = character;
    for(let i = 0; i<str.length;i++){
        let char = str.charAt(i);
        if(character.length > 6){
            return false;
        }
        else if(i==0 && !anyNumber(char)) {
            return false;
        }
        else if(i==1 && !anyNumber(char)) {
           return false;
        }
        else if(i==2 && !anyNumber(char)) {
            return false;
        }
        else if(i==3 && !anyNumber(char)) {
            return false;
        }
        else if(i==4 && !anyUppercase(char)) {
            return false;
        }
        else if(i==5 && !anyUppercase(char)) {
            return false;
        }
        return true;
    }
}

function makeItRequired() {
    var input = document.getElementById("gender").value;
    var change = document.getElementById("sex");
    
    sex.innerHTML = "No sex provided";
}

function anyUppercase(character) {
    var str = character;
    for(let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        if(charCode >= 65 && charCode <= 90) {
            return true;
        }
    }
    return false;
}

function anySpecialCase(character){
    var str = character;
    for(let i = 0; i < str.length; i++) {
        let charCode = str.charCodeAt(i);
        if((charCode >= 33 && charCode <= 47)
            || (charCode >= 123 && charCode <= 126)
            || (charCode >= 58 && charCode <= 64)
            || (charCode >= 91 && charCode <= 96)){
            return true;
        }
    }
    return false;
}

function anyLowercase(character) {
    var str = character;
    for(let i = 0; i<str.length;i++) {
        let charCode = str.charCodeAt(i); // return ASCII value of the ith
        if(charCode >= 97 && charCode <= 122) {
            return true;
        }
    }
    return false;
}

function anyNumber(character) {
    var str = character;
    for(let i = 0; i<str.length;i++){
        let char =str.charAt(i);// gets the character
        if(char>= 0 && char <= 9){
            return true;
        }
    }
    return false;
}