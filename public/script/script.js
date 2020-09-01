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
        document.getElementById("switch").src = "../assets/img/icons/darkmode.png";
        document.getElementById("switch").title = "Switch to Dark Mode";
        document.getElementById("switch").alt = "Image courtesy of Alice Design from The Noun Project";

        document.getElementById("accountModalBtn").src = "../assets/img/icons/profile-dark.png";
        document.getElementById("accountModalBtn").title = "Login";
        document.getElementById("accountModalBtn").alt = "Image courtesy of Alice Design from The Noun Project";
	} else {
        document.getElementById("switch").src = "../assets/img/icons/lightmode.png";
        document.getElementById("switch").title = "Switch to Light Mode";
        document.getElementById("switch").alt = "Image courtesy of Tawny Whatmore from The Noun Project";

        document.getElementById("accountModalBtn").src = "../assets/img/icons/profile-light.png";
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

$(document).ready(function(){
  $("#accountModalBtn").click(function(event) {
    event.preventDefault();
    $( ".modalBox" ).load ( "login.html" );
    $(".modal").toggleClass("visible");
  });
});

$(document).ready(function(){
  $(".closeModal").click(function(){
    $(".modal").toggleClass("visible");
  });
});
