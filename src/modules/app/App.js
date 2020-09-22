import React, { useEffect} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Reader from '../reader/reader';
import Sidebar from '../sidebar/sidebar';
import Modal from 'react-modal';

import ToggleTheme from '../theme/theme'
import SetSwitchImg from '../theme/SetSwitchImg'
import Darkmode from "../../images/icons/darkmode.png";
import ProfileDark from "../../images/icons/profile-dark.png";

Modal.setAppElement('#root');


function App() {

  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
  function afterOpenModal() {
    console.log("afteropenmodal")
  }
 
  function closeModal(){
    setIsOpen(false);
  }

  useEffect(() => {
    {SetSwitchImg()}
  })

  return (
    <div className="App">

      <header>
        <h1 name="bannerText">e-pulp</h1>
      </header>

      <nav>
      <img src={Darkmode} alt="theme switcher" id="switch" onClick={ToggleTheme}></img>
      <img src={ProfileDark} alt="profile modal" id="accountModalBtn" onClick={openModal}></img>
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

      <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          className="Modal"
          overlayClassName="Overlay"
        >

          <p>I'm a modal!</p>
          <button onClick={closeModal}>close</button>

      </Modal>

    </div>

  );
}

export default App;
