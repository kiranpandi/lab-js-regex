/* Fill your code*/

function formValidate() {
    var errname = document.getElementById("name");
    var erremail = document.getElementById("email");
    var erraddress = document.getElementById("address");
    var errpassword = document.getElementById("pwd");
    var errcpassword = document.getElementById("cpwd");
    var errphone = document.getElementById("phone");
    var validate = document.getElementById("check");
    var name = document.forms["RegForm"]["Name"];
    var email = document.forms["RegForm"]["EMail"];
    var phone = document.forms["RegForm"]["phone"];
    var password = document.forms["RegForm"]["Password"];
    var cpassword = document.forms["RegForm"]["cPassword"];
    var address = document.forms["RegForm"]["Address"];

    if (name.value == "" && address.value == "" && email.value == "" && password.value == "" && cpassword.value == "" && phone.value == "") {

        errname.innerText = "Kindly Enter Your Username"
        erremail.innerText = "Kindly Enter Your Email"
        erraddress.innerText = "Kindly Enter Your Address"
        errpassword.innerText = "Kindly Enter Your Password"
        errcpassword.innerText = "Kindly Enter Your Password"
        errphone.innerText = "Kindly Enter Your Phone Number"
    }

    if (name.value.length < 8 && name.value.length > 15) {
        errname.innerText = "Enter a username of minimum 8 and maximum of 15 characters long"
        name.focus()
        return false
    } else {
        errname.innerText = ""
    }



    if (address.value == "") {
        erraddress.innerText = "Kindly Enter Your Address";
        address.focus();
        return false;
    }
    else {
        erraddress.innerText = "";
    }

    if (email.value == "") {
        erremail.innerText = "Kindly Enter Your Email";
        email.focus();
        return false;
    } else if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value)) {
        erremail.innerText = ""
    } else {
        erremail.innerText = "Enter Valid Email Address";
        email.focus();
        return false;
    }


    if (password.value == "") {
        errpassword.innerText = "Kindly Enter Your Password";
        password.focus();
        return false;
    } else if (password.value.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/)) {
        errpassword.innerText = "";
    } else {
        errpassword.innerText = "Enter Valid Password";
        password.focus();
        return false;
    }

    if (cpassword.value == "") {
        errcpassword.innerText = "Kindly Enter your Password";
        cpassword.focus();
        return false;
    } else if (password.value == cpassword.value) {
        errcpassword.innerText = ""
    } else {
        errcpassword.innerText = "Enter Valid Password";
        cpassword.focus();
        return false;
    }

    if (phone.value == "") {
        errphone.innerText = "Kindly Enter Your Phone Number";
        phone.focus();
        return false;
    } else if (NaN(phone.value) == true && phone.value < 10) {
        errphone.innerText = "phone number should cointain 10 numbers";
        phone.focus();
        return false;
    } else {
        errphone.innerText = ""
    }
    validate.innerText = "Regex Validation Success"
    check.focus();
    return true;

}