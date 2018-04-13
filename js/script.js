function check() {

    let name = document.querySelector("#name");
    let email = document.querySelector("#email");
    let subject = document.querySelector("#subject");
    let text = document.querySelector("#text");

    let error = "";

    if (name.value == "") {
        error += "Enter your name \n";
        name.style.borderColor = "red";
    }
    if (email.value == "") {
        error += "Enter your email \n";
        email.style.borderColor = "red";
    }
    if (subject.value == "") {
        error += "Please enter a subject \n";
        subject.style.borderColor = "red";
    }
    if (text.value == "") {
        error += "Please enter your message \n";
        text.style.borderColor = "red";
    }
    if (error != "") {
        alert(error);
        return false;
    } else {
        alert("Message sent, thank you");

    }
}