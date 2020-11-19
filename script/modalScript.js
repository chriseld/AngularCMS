function toggleModal(x) {
    switch (x) {
        case "login":
            if($('#accountModalBtn').hasClass('loggedin')) {
                $('.modalBox').html(`
                <fieldset>
                    <legend>Account</legend>
                    <p>Current user logged in: <span id="displayUsername"></span></p>
                    <p>Current user role: <span id="displayRole"></span></p><br>
                    <div class='buttons'>
                        <span id='logoutBtn' class='btn' onclick='logout()'>Logout</span>
                        <span id='closeBtn' class='btn' onclick='closeModal()'>Close</span>
                    </div>
                </fieldset>
            `);
            getUsername();
            getRole();
            } else {
            $('.modalBox').html(`
                <fieldset>
                    <legend>Log In</legend>
                    <p>Email: <input type='email' name='loginEmail' id='loginEmail' placeholder='example@email.com' /></p>
                    <p>Password: <input type='password' name='loginPassword' id='loginPassword' /></p> <br>
                    <div class='buttons'>
                        <span id='loginBtn' class='btn' onclick='login()'>Login</span>
                        <span id='registerBtn' class='btn' onclick='toggleModal("register")'>Not a user yet? Register!</span>
                        <span id='closeBtn' class='btn' onclick='closeModal()'>Close</span>
                    </div>
                </fieldset>
            `);
            }
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
        case "author":
            if($('#accountModalBtn').hasClass('loggedin')) {
                $('.modalBox').html(`
                <fieldset>
                    <legend>Author Controls</legend>
                    <p>Current user logged in: <span id="displayUsername"></span></p>
                    <p>Current user role: <span id="displayRole"></span></p><br>
                    <div class='buttons'>
                        <span id='logoutBtn' class='btn' onclick='logout()'>Logout</span>
                        <span id='closeBtn' class='btn' onclick='closeModal()'>Close</span>
                    </div>
                </fieldset>
            `);
            getUsername();
            getRole();
            } else {
            $('.modalBox').html(`
                <fieldset>
                    <legend>Error</legend>
                    <p>Sorry, something went wrong.</p>
                    <div class='buttons'>
                        <span id='closeBtn' class='btn' onclick='closeModal()'>Close</span>
                    </div>
                </fieldset>
            `);
            }
            $(".modal").toggleClass("visible");
        break;
        case "moderator":
            if($('#accountModalBtn').hasClass('loggedin')) {
                $('.modalBox').html(`
                <fieldset>
                    <legend>Moderator Controls</legend>
                    <p>Current user logged in: <span id="displayUsername"></span></p>
                    <p>Current user role: <span id="displayRole"></span></p><br>
                    <div class='buttons'>
                        <span id='logoutBtn' class='btn' onclick='logout()'>Logout</span>
                        <span id='closeBtn' class='btn' onclick='closeModal()'>Close</span>
                    </div>
                </fieldset>
            `);
            getUsername();
            getRole();
            } else {
            $('.modalBox').html(`
                <fieldset>
                    <legend>Error</legend>
                    <p>Sorry, something went wrong.</p>
                    <div class='buttons'>
                        <span id='closeBtn' class='btn' onclick='closeModal()'>Close</span>
                    </div>
                </fieldset>
            `);
            }
            $(".modal").toggleClass("visible");
        break;
        case "admin":
            if($('#accountModalBtn').hasClass('loggedin')) {
                $('.modalBox').html(`
                <fieldset>
                    <legend>Admin Controls</legend>
                    <p>Current user logged in: <span id="displayUsername"></span></p>
                    <p>Current user role: <span id="displayRole"></span></p><br>
                    <div class='buttons'>
                        <span id='logoutBtn' class='btn' onclick='logout()'>Logout</span>
                        <span id='closeBtn' class='btn' onclick='closeModal()'>Close</span>
                    </div>
                </fieldset>
            `);
            getUsername();
            getRole();
            } else {
            $('.modalBox').html(`
                <fieldset>
                    <legend>Error</legend>
                    <p>Sorry, something went wrong.</p>
                    <div class='buttons'>
                        <span id='closeBtn' class='btn' onclick='closeModal()'>Close</span>
                    </div>
                </fieldset>
            `);
            }
            $(".modal").toggleClass("visible");
        break;
        default:
            $('.modalBox').html("<p>Sorry, something went wrong!</p>");
    }
}