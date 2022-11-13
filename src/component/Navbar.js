import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const toggleButtonHandler = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };
  return (
    <>
      <div className="Navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <div>
              <label>
                <Link to="/" className="link">
                  News-App
                </Link>
              </label>
            </div>
            <div>
              <span class="togglebtn" onClick={toggleButtonHandler}>
                &#9776;
              </span>
            </div>
          </div>
          <div className={toggle ? "nav-list" : "nav-list-responsive"}>
            <Link to="/apple" className="link">
              Apple
            </Link>
            <Link to="/tesla" className="link">
              Tesla
            </Link>
            <Link to="/business" className="link">
              Business
            </Link>
            <Link to="/tech" className="link">
              Tech
            </Link>
            <Link to="/education" className="link">
              Educations
            </Link>
            <Link to="/science" className="link">
              Science
            </Link>
            <Link to="/sports" className="link">
              Sports
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
