import React from 'react';
import Darkmode from "../../images/icons/darkmode.png";
import Lightmode from "../../images/icons/lightmode.png";
import ProfileLight from "../../images/icons/profile-light.png";
import ProfileDark from "../../images/icons/profile-dark.png";
import ProfileLoggedIn from "../../images/icons/profile-loggedin.png";

import SetSwitchImg from './SetSwitchImg'

if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme("theme-dark");
  } else {
    setTheme("theme-light");
  };

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
  }

function ToggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark'){
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
    SetSwitchImg();
 }



export default ToggleTheme;