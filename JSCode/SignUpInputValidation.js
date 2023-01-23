function submitStatusDisplay() {
    
}

function emailValidation(emailInput) {
    var userIdEle = document.getElementById("emailbox");
    var change = document.getElementById("line1");


    if (emailInput.length == 0) {
        change.innerHTML = "Please fill in the textbox";
    }

    else if (emailInput.length < 5 || emailInput.length > 12) {
        change.innerHTML = "Length should be between 5 and 12";
    }
}

function userIDValidation() {
    var len = document.getElementById("userID").value;
    var change = document.getElementById("line1");
 
    if (len.length == 0) {
        change.innerHTML="Please fill in the textbox";
    }
    else if (len.length < 5 || len.length > 12) {
        change.innerHTML="Length should be between 5 and 12";
    }
    else if (len.length > 4 && len.length < 12){
        change.innerHTML = "Success";
    }
    if(checkEnter(e)){

        change.innerHTML = "";
    }
  
}

function checkEnter(e) {
    if (e.key = "Enter    ") {
     return true;
    }
  }