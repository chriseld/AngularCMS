import React from 'react';
import Darkmode from "../../images/icons/darkmode.png";
import Lightmode from "../../images/icons/lightmode.png";
import ProfileLight from "../../images/icons/profile-light.png";
import ProfileDark from "../../images/icons/profile-dark.png";
import ProfileLoggedIn from "../../images/icons/profile-loggedin.png";
 
 function SetSwitchImg() {
	if (localStorage.getItem('theme') === 'theme-light') {
        document.getElementById("switch").src = Darkmode;
        document.getElementById("switch").title = "Switch to Dark Mode";
        document.getElementById("switch").alt = "Image courtesy of Alice Design from The Noun Project";

        document.getElementById("accountModalBtn").src = ProfileDark;
        document.getElementById("accountModalBtn").title = "Login";
        document.getElementById("accountModalBtn").alt = "Image courtesy of Alice Design from The Noun Project";
	} else {
        document.getElementById("switch").src = Lightmode;
        document.getElementById("switch").title = "Switch to Light Mode";
        document.getElementById("switch").alt = "Image courtesy of Tawny Whatmore from The Noun Project";

        document.getElementById("accountModalBtn").src = ProfileLight;
        document.getElementById("accountModalBtn").title = "Login";
        document.getElementById("accountModalBtn").alt = "Image courtesy of Alice Design from The Noun Project";
	}
}

export default SetSwitchImg;