import React from "react";
import {Link }from "react-router-dom";

function Navbar() {
  return (
    <div  >
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary border-bottom"
        style={{ backgroundColor: "rgb(255, 255, 255)",  }}
      >
        <div className="container p-2" style={{width:"80%"}}>
          <Link className="navbar-brand" to="/">
            <img
              src="./media/image/logo.svg"
              alt="zerodha"
              style={{
                width: "25%",
              }}
            ></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
            <ul className="navbar-nav  mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Signup">
                Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active " to="/about" style={{color:"#424242"}}>
                  about
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/product">
               Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/pricing">
                 Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/support">
              Support
                </Link>
              </li>
              
            </ul>
           

            </form>
            <div classNameName=" px-3"><i className="fa fa-bars " aria-hidden="true" ></i></div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
