function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const invalidEmail = document.querySelector(".invalid_message");

    if (inputText.value.match(mailformat)) {
        document.getElementById("addedText").innerHTML = "";
        return true;
    } else {
        document.getElementById("addedText").style.paddingTop = "0.2rem";
        document.getElementById("addedText").style.paddingLeft = "2rem";
        document.getElementById("addedText").style.textAlign = "left";
        document.getElementById("addedText").style.width = "80%";
        document.getElementById("addedText").style.fontSize = "0.8rem";
        document.getElementById("addedText").style.color = "hsl(0, 100%, 63%)";
        document.getElementById("addedText").innerHTML = "Please enter a valid email address";
        return false;
    }
}
