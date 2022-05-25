function showpizza() {
    document.getElementById("tb2div").style.display = "block";
    document.getElementById("tb3div").style.display = "none";
    document.getElementById("tb4div").style.display = "none";
}

function showsalads() {
    document.getElementById("tb3div").style.display = "block";
    document.getElementById("tb2div").style.display = "none";
    document.getElementById("tb4div").style.display = "none";
}

function showextras() {
    document.getElementById("tb4div").style.display = "block";
    document.getElementById("tb2div").style.display = "none";
    document.getElementById("tb3div").style.display = "none";
}

function check() {
    var a = document.getElementById("pass").value;
    var s = /\s/;
    if (a.search(s) > 0) {
        document.getElementById("message1").style.display = "block";
        document.getElementById("message2").style.display = "none";
        document.getElementById("message3").style.display = "none";
        document.getElementById("message4").style.display = "none";
        document.getElementById("message5").style.display = "none";
        document.getElementById("message1").innerHTML = "*No white spaces are allowed in the password!*"
        return false;
    } else if (a.length != 8) {
        document.getElementById("message2").style.display = "block";
        document.getElementById("message1").style.display = "none";
        document.getElementById("message3").style.display = "none";
        document.getElementById("message4").style.display = "none";
        document.getElementById("message5").style.display = "none";
        document.getElementById("message2").innerHTML = "*Password legth must be 8!*"
        return false;
    } else if (a.search(/[0-9]/) == -1) {
        document.getElementById("message3").style.display = "block";
        document.getElementById("message1").style.display = "none";
        document.getElementById("message2").style.display = "none";
        document.getElementById("message4").style.display = "none";
        document.getElementById("message5").style.display = "none";
        document.getElementById("message3").innerHTML = "*Password must include one digit at least!*"
        return false;
    } else if (a.search(/[\_\#\*\&\-]/) == -1) {
        document.getElementById("message4").style.display = "block";
        document.getElementById("message1").style.display = "none";
        document.getElementById("message2").style.display = "none";
        document.getElementById("message3").style.display = "none";
        document.getElementById("message5").style.display = "none";
        document.getElementById("message4").innerHTML = "*Password must include one special character like (- , _ , # , *, &)!*"
        return false;
    } else if (a.charAt(0).search(/[A-Z]/) == -1) {
        document.getElementById("message5").style.display = "block";
        document.getElementById("message1").style.display = "none";
        document.getElementById("message2").style.display = "none";
        document.getElementById("message3").style.display = "none";
        document.getElementById("message4").style.display = "none";
        document.getElementById("message5").innerHTML = "*Password must start with uppercase character!*"
        return false;
    } else {
        return true;
    }

}