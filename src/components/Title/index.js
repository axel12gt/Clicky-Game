import React from "react";
import "./style.css";

function Title({ friends, instructions, score, hiScore }) {
  return (
    <h1 className="title">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                {friends}
              </a>
            </li>
          </ul>
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link">{instructions}</a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <p>Score: {score} | Hi-Score: {hiScore} </p>
            </li>
          </ul>
        </div>
      </nav>
    </h1>
  );
}

export default Title;
