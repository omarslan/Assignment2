function controlSubmitStatus() {
    var isProperlyFilledIn = true;
    if (!userIDValidation()) {
        isProperlyFilledIn = false;
    }
    if (!passwordValidation()) {
        isProperlyFilledIn = false;
    }
    if (!emailValidation()) {
        isProperlyFilledIn = false;
    }
    if (!zipCodeValid()) {
        isProperlyFilledIn = false;
    }
    if (!nameValidation()) {
        isProperlyFilledIn = false;
    }
    if (!languageValidation()) {
        isProperlyFilledIn = false;
    }
    if (!countryValidation()) {
        isProperlyFilledIn = false;
    }
    if (isProperlyFilledIn) {
        alert("User ID: " + document.getElementById("userID").value +
            "\nPassword: " + document.getElementById("passwordID").value +
            "\nEmail: " + document.getElementById("emailID").value +
            "\nAddress: " + document.getElementById("addressID").value +
            "\nZIP Code: " + document.getElementById("zipCode").value +
            "\nName: " + document.getElementById("nameID").value +
            "\nGender: " + genderGetter() +
            "\nLanguage: " + document.getElementById("language").value +
            "\nCountry: " + document.getElementById("country").value);
    }
}

function genderGetter() {
    var radios = document.getElementsByName('gender');
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            switch (i) {
                case 0:
                    return "Male";
                case 1:
                    return "Female";
                case 2:
                    return "Don't want to share";
            }
        }
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

function passwordValidation() {
    var pass = document.getElementById("passwordID").value;
    var txt = document.getElementById("passwordStatus");
   
    if (pass.length == 0) {
        txt.innerHTML = "This is a required field";
        return false;
    }
    if(pass.length < 12) {
        txt.innerHTML = "Minimum 12 characters is required";
        return false;
    }
    else if(!anyNumber(pass)) {
        txt.innerHTML = "Minimum 1 number is required";
        return false;
    }
    else if (!anyUppercase(pass)) {
        txt.innerHTML = "Minimum 1 capital letter is required";
        return false;
    }
    else if (!anyLowercase(pass)) {
        txt.innerHTML = "Minimum 1 lowercase letter is required";
        return false;
    }
    else if (!anySpecialCase(pass)) {
        txt.innerHTML = "Minimum 1 special character is required";
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
        change.innerHTML = "@ character missing";
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
        change.innerHTML = "Mail address should end with .com";
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

    if (name.length == 0) {
        txt.innerHTML = "This is a required field";
        return false;
    }

    for (var i = 0; i < name.length; i++) {
        var charASCIICode = name.charCodeAt(i);
        if (!((charASCIICode >= 97 && charASCIICode <= 122) || (charASCIICode >= 65 && charASCIICode <= 90))) {
            txt.innerHTML = "Name should only contain letters";
            return false;
        }
    }

    txt.innerHTML = "Looks good!";
    return true;
}

function languageValidation(language) {
    var languageChoice = document.getElementById("language").value;
    var txt = document.getElementById("languageStatus");

    if (languageChoice == "None") {
        txt.innerHTML = "This is a required field";
        return false;
    }
    txt.innerHTML = "Looks good!";
    return true;
}

function countryValidation() {
    var countryChoice = document.getElementById("country").value;
    var txt = document.getElementById("countryStatus");

    if (countryChoice == "None") {
        txt.innerHTML = "This is a required field";
        return false;
    }
    txt.innerHTML = "Looks good!";
    return true;
}

function zipCodeValid() {
    var zip = document.getElementById("zipCode").value;
    var txt = document.getElementById("zipCodeStatus");

    if (zip.length == 0) {
        txt.innerHTML = "This is a required field";
        return false;
    }
    else if(validateZip(zip)) {
        txt.innerHTML = "Looks good";
        return true;
    }
    else if(!validateZip(zip)) {
        txt.innerHTML = "Looks good";
        return true;
    }
    else if(zip.length > 6) {
        txt.innerHTML = "Looks good";
        return true;
    }
    else {
        txt.innerHTML = "Looks good!"
        return true;
    }
}

function validateZip(character) {
    var bol = true;
    var str = character;
    for(let i = 0; i < str.length; i++){
        let char = str.charAt(i);
        if(character.length > 6) {
            return false;
        }
        else if(i == 0 && !anyNumber(char)) {
            return false;
        }
        else if(i == 1 && !anyNumber(char)) {
           return false;
        }
        else if(i == 2 && !anyNumber(char)) {
            return false;
        }
        else if(i == 3 && !anyNumber(char)) {
            return false;
        }
        else if(i == 4 && !anyUppercase(char)) {
            return false;
        }
        else if(i == 5 && !anyUppercase(char)) {
            return false;
        }
        return true;
    }
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