function Validation() {
    var firstname = document.getElementById("fname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (firstname.length == "") {        
        // alert("Please Enter Your Name")
        document.getElementById("fname_msg").innerHTML = "Name is emptry"
        return false
    } else if (firstname.length > 20) {
        // alert("Name length should not exceed 20 chars")
        document.getElementById("fname_msg").innerHTML = "Name length should not exceed 20 chars"
        return false
    } else if (!isNaN(firstname)) {
        // alert("Number not allowed")
        document.getElementById("fname_msg").innerHTML = "Number not allowed"
        return false
    }

    if (email.length == "") {
        // alert("Email field cannot be empty")
        document.getElementById("email_msg").innerHTML = "Email field cannot be empty"
        return false
    } else if (email.indexOf("@") == 0) {
        // alert("Invalid Email!")
        document.getElementById("email_msg").innerHTML = "Invalid Email!"
        return false
    }

    if (password.length == "") {
        // alert("Password cannot be empty")
        document.getElementById("password_msg").innerHTML = "Password cannot be empty"
        return false
    } else if (password.length < 4 || password.length > 15) {
        // alert("Password length should be in between 4 and 15")
        document.getElementById("password_msg").innerHTML = "Password length should be in between 4 and 15"
        return false
    }
    
}