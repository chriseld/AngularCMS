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
	} else {
		document.getElementById("switch").src = "../assets/img/icons/lightmode.png";
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