function myEmail() {
    let x =  confirm("Want to send an email?");
    if (x == true) {
        window.open("mailto:darveloper@gmail.com?subject=Website Inquiry");
    }
    else {
        alert("You cancelled your request!")
    }
}

function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
  }