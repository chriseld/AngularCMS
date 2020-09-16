import React from 'react';
import './App.css';

import NavRender from '../nav/nav';



function App() {

  return (
    <div className="App">
      <header>
        <h1 name="bannerText">e-pulp</h1>
      </header>

      { NavRender() }

      <div className="main">

        <div className="sidebar">

        </div>

        <div className="reader">

        </div>

      </div>

      <footer>
        <p className="copyright">&copy; Chris Eld, 2020</p>
      </footer>
    </div>
  );
}

export default App;
