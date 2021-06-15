import React from "react";

import Button from "elements/Button";

import BrandIcon from "parts/BrandIcon";

import Fade from "react-reveal/Fade";

import { getWithExpiry } from "utils/setExpiryLocalStorage";

export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  const logout = () => {
    localStorage.clear();
  };

  if (props.isCentered)
    return (
      <Fade>
        <header className="spacing-sm">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <BrandIcon style={{ fontSize: 32, margin: "auto" }} />
            </nav>
          </div>
        </header>
      </Fade>
    );

  if (getWithExpiry("name"))
    return (
      <Fade>
        <header className="spacing-sm">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <BrandIcon style={{ marginRight: 30, fontSize: 32 }} />
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <hr className="mb-0" />
                <ul className="navbar-nav">
                  <li className={`nav-item${getNavLinkClass("/me")}`}>
                    <Button
                      className="nav-link border-left border-right border-left-none border-right-none border-bottom border-top-none border-bottom-none"
                      type="link"
                      href="/me"
                    >
                      Beranda
                    </Button>
                  </li>
                  <li className={`nav-item${getNavLinkClass("/category")}`}>
                    <Button
                      className="nav-link border-right border-left-none border-right-none border-bottom border-top-none border-bottom-none"
                      type="link"
                      href="/category"
                    >
                      Kategori
                    </Button>
                  </li>
                  <li className={`nav-item${getNavLinkClass("/request")}`}>
                    <Button
                      className="nav-link border-right border-right-none border-bottom border-top-none border-bottom-none"
                      type="link"
                      href="/request"
                    >
                      Request
                    </Button>
                  </li>
                  <li className={`nav-item${getNavLinkClass("/order")}`}>
                    <Button
                      className="nav-link border-right border-right-none border-bottom border-top-none border-bottom-none"
                      type="link"
                      href="/order"
                    >
                      Order
                    </Button>
                  </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                  <li className={`nav-item${getNavLinkClass("/chat")}`}>
                    <Button
                      className="nav-link border-left border-right border-left-none border-right-none border-bottom border-top-none border-bottom-none"
                      type="link"
                      href="/chat"
                    >
                      Chat
                    </Button>
                  </li>
                  <li className={`nav-item${getNavLinkClass("/profil")}`}>
                    <Button
                      className="nav-link border-right border-right-none border-bottom border-top-none border-bottom-none"
                      type="link"
                      href="/profil"
                    >
                      {getWithExpiry("name")}
                    </Button>
                  </li>
                  <li className={`nav-item${getNavLinkClass("/")}`}>
                    <Button
                      className="nav-link border-right border-right-none border-bottom border-top-none border-bottom-none"
                      type="link"
                      onClick={logout}
                      href="/"
                    >
                      Logout
                    </Button>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>
      </Fade>
    );

  return (
    <Fade>
      <header className="spacing-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <BrandIcon style={{ marginRight: 30, fontSize: 32 }} />
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <hr className="mb-0" />
              <ul className="navbar-nav">
                <li className={`nav-item${getNavLinkClass("/")}`}>
                  <Button
                    className="nav-link border-left border-right border-left-none border-right-none border-bottom border-bottom-none"
                    type="link"
                    href="/"
                  >
                    Beranda
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/category")}`}>
                  <Button
                    className="nav-link border-right border-bottom border-left-none border-right-none border-bottom-none"
                    type="link"
                    href="/category"
                  >
                    Kategori
                  </Button>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className={`nav-item`}>
                  <Button
                    className="nav-link border-left border-right border-left-none border-right-none border-bottom border-bottom-none"
                    type="link"
                    href="https://kerjain-webservice.herokuapp.com/register"
                    isExternal
                  >
                    Jadi Mitra Kami
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/login")}`}>
                  <Button
                    className="nav-link border-right border-left-none border-right-none border-bottom border-bottom-none"
                    type="link"
                    href="/login"
                  >
                    Login
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/register")}`}>
                  <Button
                    className="nav-link border-right border-left-none border-right-none border-bottom-none"
                    type="link"
                    href="/register"
                  >
                    Register
                  </Button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  );
}
