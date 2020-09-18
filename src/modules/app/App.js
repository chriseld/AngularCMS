import React from 'react';
import './App.css';
import Reader from '../reader/reader';
import Sidebar from '../sidebar/sidebar';

import ToggleTheme from '../theme/theme'
import { ModalProvider } from "../modal/ModalContext/ModalContext";

import Darkmode from "../../images/icons/darkmode.png";
import Login from '../modal/login/login';


function App() {

  return (
    <div className="App">

      <header>
        <h1 name="bannerText">e-pulp</h1>
      </header>

      <nav>
      <img src={Darkmode} alt="theme switcher" id="switch" onClick={ToggleTheme}></img>
      <ModalProvider><Login /></ModalProvider>
      </nav>

      <div id="main">

        <div className="sidebar">
          { Sidebar() }
        </div>

        <div className="reader">
          { Reader() }
        </div>

      </div>

      <footer>
        <p className="copyright">&copy; Chris Eld, 2020</p>
      </footer>

    </div>

  );
}

export default App;
