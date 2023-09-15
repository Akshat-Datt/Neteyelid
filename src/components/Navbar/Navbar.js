import React from "react";
import Search from "./Search";
import { BsFillEyeFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  let navigate = useNavigate();
  const handleLog = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };
  return (
    <div>
      <nav className={` navbar-light bg-light ${styles.navbar}`}>
        <div className={`${styles.contained}`}>
          <ul className={`navbar-nav   ${styles.listed}`}>
            <li className="nav-item">
              <Link
                className={`nav-link active ${styles.logo}`}
                aria-current="page"
                to="/"
              >
                <BsFillEyeFill />
              </Link>
            </li>
          </ul>
          <Link className={`navbar-brand ${styles.project}`} to="/">
            EyeLid
          </Link>
          <Search></Search>
          {!localStorage.getItem("authToken") ? (
            <ul
              id="login-btns"
              className={`navbar-nav   ${styles.listedAgain}`}
            >
              <li className="nav-item">
                <Link
                  className={`nav-link active ${styles.backend}`}
                  aria-current="page"
                  to="/signup"
                >
                  Sign up
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link active ${styles.backend}`}
                  aria-current="page"
                  to="/login"
                >
                  Log in
                </Link>
              </li>
            </ul>
          ) : (
            <ul
              id="login-btns"
              className={`navbar-nav   ${styles.listedAgain}`}
            >
              <li className="nav-item">
                <Link
                  className={`nav-link active ${styles.backend}`}
                  aria-current="page"
                  to="/"
                >
                  <CgProfile />
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link active ${styles.backend}`}
                  aria-current="page"
                  to="/"
                  onClick={handleLog}
                >
                  Log out
                </Link>
              </li>
            </ul>
          )}
          {(!localStorage.getItem("authToken"))?
          <div>
            <div className={` ${styles.collapsed}`}>
              <button
                className={`navbar-toggler ${styles.colBut}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className={`collapse`} id="navbarToggleExternalContent">
              <div className={`bg-light p-2 ${styles.popped}`}>
                <Search></Search>
                <ul id="login-btns" className={`navbar-nav   ${styles.listed}`}>
                  <li className="nav-item">
                    <Link
                      className={`nav-link active ${styles.backend}`}
                      aria-current="page"
                      to="/signup"
                    >
                      Sign up
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link active ${styles.backend}`}
                      aria-current="page"
                      to="/login"
                    >
                      Log in
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          :
          <div className={` ${styles.collapsed}`}>
              <button
                className={`navbar-toggler ${styles.colBut}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={handleLog}
              >
                <span>Log out</span>
              </button>
            </div>
          }
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
