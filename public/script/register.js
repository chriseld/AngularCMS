function validateEmail() {
    var emailField = $("#emailInput").val();

    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailField)) {
        return (true);
    }
    alert("You have entered an invalid email address!");
    return (false);
}