import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            GetHired
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className=" collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <a
                  className="nav-link mx-2 active"
                  aria-current="page"
                  href="#"
                >
                  Find a job
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link mx-2 " aria-current="page" href="#">
                  Company Application
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link mx-2 " aria-current="page" href="#">
                  Company Reviews
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto d-none d-lg-inline-flex">
              <li className="nav-item mx-2">
                <a className="nav-link text-dark h5" href="" target="blank">
                  <FontAwesomeIcon icon="fa-regular fa-circle-user" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
