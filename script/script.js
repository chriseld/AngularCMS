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
    if (str.length == 0) {
        document.getElementById("emailError").innerHTML = "";
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
                    <p>Username: <input type='text' name='registerUsername' id='registerUsername' /></p>
                    <p>Password: <input type='password' name='registerPassword' id='registerPassword' /></p>
                    <p>Confirm Password: <input type='password' name='registerConfirmPassword' id='registerConfirmPassword' /></p> <br>
                    <div class='buttons'>
                        <input type='submit' class='btn' value='Register'>
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

