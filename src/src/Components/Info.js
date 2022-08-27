import React from "react";

const Info = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="overlay">
      <div className="modalContainer">
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

export default Info;
