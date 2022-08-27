import React from "react";
import bg2 from "./bg2.png";

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="overlay">
      <div className="modalContainer">
        <img src={bg2} alt="" />
        <div className="modalRight">
          <p onClick={onClose} className="closeBtn">
            x
          </p>
          <div className="content">
            <h1>ABOUT (this.quiz)</h1>
            <p>
              (this.quiz) is a frontend web development trivia quiz developed
              with React JS software by San Singh and Ela Kos.
            </p>
            <p>APIs and links: https://opentdb.com/api_config.php</p>
            <footer>© 2022</footer>
          </div>
          <div className="btnContainer">
            <button className="btnPrimary">
              <span className="bold">YES</span>
            </button>
            <button className="btnOutline">NO</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
