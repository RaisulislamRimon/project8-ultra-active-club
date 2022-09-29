import React from "react";

const Header = () => {
  return (
    <div>
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <span className="fs-4">
              <img
                src="https://i.ibb.co/mGjVS88/favicon.png"
                alt="logo"
                width="70"
                height="42"
              />
            </span>
          </a>

          <ul className="nav nav-pills">
            <li className="nav-item">
              <a href="/" className="nav-link active" aria-current="page">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link text-dark">
                Exercises
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link text-dark">
                Routines
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link text-dark">
                Questions
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link text-dark">
                About
              </a>
            </li>
          </ul>
        </header>
      </div>
    </div>
  );
};

export default Header;
