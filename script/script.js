// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
   if (localStorage.getItem('theme') === 'theme-dark'){
       setTheme('theme-light');
   } else {
       setTheme('theme-dark');
   }
   setSwitchImg();
}

// Function to set the text of the toggle button
function setSwitchImg() {
	if (localStorage.getItem('theme') === 'theme-light') {
        document.getElementById("switch").src = "../images/icons/darkmode.png";
        document.getElementById("switch").title = "Switch to Dark Mode";
        document.getElementById("switch").alt = "Image courtesy of Alice Design from The Noun Project";

        document.getElementById("accountModalBtn").src = "../images/icons/profile-dark.png";
        document.getElementById("accountModalBtn").title = "Login";
        document.getElementById("accountModalBtn").alt = "Image courtesy of Alice Design from The Noun Project";
	} else {
        document.getElementById("switch").src = "../images/icons/lightmode.png";
        document.getElementById("switch").title = "Switch to Light Mode";
        document.getElementById("switch").alt = "Image courtesy of Tawny Whatmore from The Noun Project";

        document.getElementById("accountModalBtn").src = "../images/icons/profile-light.png";
        document.getElementById("accountModalBtn").title = "Login";
        document.getElementById("accountModalBtn").alt = "Image courtesy of Alice Design from The Noun Project";
	}
}

// Immediately invoked function to set the theme on initial load
(function () {
   if (localStorage.getItem('theme') === 'theme-dark') {
       setTheme('theme-dark');
   } else {
       setTheme('theme-light');
   }
   setSwitchImg();
})();

function closeModal() {
    $(".modal").toggleClass("visible")
}

function checkEmail(str) {
    var mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (str.length == 0) {
        document.getElementById("emailError").innerHTML = "Email address required";
        return;
      } else if(!str.match(mailFormat)) {
        document.getElementById("emailError").innerHTML = "Valid email address required";
        return;
      } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            document.getElementById("emailError").innerHTML = this.responseText;
          }
        };
        xmlhttp.open("GET", "registerEmail.php?q=" + str, true);
        xmlhttp.send();
      }
      checkRegBtn();
}

function checkName(str) {
    if (str.length == 0) {
        document.getElementById("nameError").innerHTML = "Username required";
        return;
      } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            document.getElementById("nameError").innerHTML = this.responseText;
          }
        };
        xmlhttp.open("GET", "registerName.php?q=" + str, true);
        xmlhttp.send();
      }
    checkRegBtn();
}

function checkPwd(str) {
    str = str.trim();
    if(str.length < 8) {
        document.getElementById("pwdError").innerHTML = "Password must be at least 8 characters in length";
        return;
    } else {
        document.getElementById("pwdError").innerHTML = "Valid";
    }
    checkRegBtn();
}

function checkPwdMatch(str) {
    if(str != document.getElementById("registerPwd").value) {
        document.getElementById("pwdMatchError").innerHTML = "Passwords must match";
        return;
    } else {
        document.getElementById("pwdMatchError").innerHTML = "Valid";

    }
    checkRegBtn();
}

function checkRegBtn() {

    var email = document.getElementById("emailError").innerHTML.trim();
    var username = document.getElementById("nameError").innerHTML.trim();
    var pwd = document.getElementById("pwdError").innerHTML.trim();
    var pwdMatch = document.getElementById("pwdMatchError").innerHTML.trim();

    if(email == "Valid" && username == "Valid" && pwd == "Valid" && pwdMatch == "Valid") {
        $("#registerBtn").removeClass("disabled");
        $("#registerBtn").addClass("enabled");
        return;
    } else {
        $("#registerBtn").removeClass("enabled");
        $("#registerBtn").addClass("disabled");
        return;
    }
}

function sendConfirmationEmail() {

    var email = document.getElementById("registerEmail").value.trim();
    var username = document.getElementById("registerUsername").value.trim();

    var xmlhttp = new XMLHttpRequest();
    regStr = "registerSendEmail.php?e=" + email + "&u=" + username;
    xmlhttp.open("GET", regStr, true);
    xmlhttp.send();
}

function register() {
    if($("#registerBtn").hasClass("enabled")) {
        email = document.getElementById("registerEmail").value;
        username = document.getElementById("registerUsername").value;
        password = document.getElementById("registerPwd").value;

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", "register.php?e=" + email + "&u=" + username + "&p=" + password, true);
        xmlhttp.send();

        sendConfirmationEmail();

        closeModal();

        alert("Thank you for registering. You are now logged in.");
    }
}

function toggleModal(x) {
    switch (x) {
        case "login":
            $('.modalBox').html(`
                <fieldset>
                    <legend>Log In</legend>
                    <p>Email: <input type='email' name='loginEmail' id='loginEmail' placeholder='example@email.com' /></p>
                    <p>Password: <input type='password' name='loginPassword' id='loginPassword' /></p> <br>
                    <div class='buttons'>
                        <span id='loginBtn' class='btn'>Login</span>
                        <span id='registerBtn' class='btn' onclick='toggleModal("register")'>Not a user yet? Register!</span>
                        <span id='closeBtn' class='btn' onclick='closeModal()'>Close</span>
                    </div>
                </fieldset>
            `);
            $(".modal").toggleClass("visible");
        break;
        case "register":
            $('.modalBox').html(`
                <form action='../register.php' method='post'>
                <fieldset>
                    <legend>Register</legend>
                    <p>Email: <input type='email' name='registerEmail' id='registerEmail' placeholder='example@email.com' onblur='checkEmail(this.value)'/><span id='emailError'></span></p>
                    <p>Username: <input type='text' name='registerUsername' id='registerUsername' onblur='checkName(this.value)' /><span id='nameError'></span></p>
                    <p>Password: <input type='password' name='registerPwd' id='registerPwd' onblur='checkPwd(this.value)' /><span id='pwdError'></span></p>
                    <p>Confirm Password: <input type='password' name='registerConfirmPassword' id='registerConfirmPassword' onblur='checkPwdMatch(this.value)' /><span id='pwdMatchError'></p> <br>
                    <div class='buttons'>
                        <span class='btn disabled' id='registerBtn' onclick='register()'>Register</span>
                        <span id='closeBtn' class='btn' onclick='closeModal()'>Close</span>
                    </div>
                </fieldset>
                </form>
            `);
        break;
        default:
            $('.modalBox').html("<p>Sorry, something went wrong!</p>");
    }
}

