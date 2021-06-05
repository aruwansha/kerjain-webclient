import React from "react";

import Button from "elements/Button";

import BrandIcon from "parts/BrandIcon";

import Fade from "react-reveal/Fade";

export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };
  return (
    <Fade>
      <header className="spacing-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <BrandIcon style={{ marginRight: 30, fontSize: 32 }} />
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className={`nav-item${getNavLinkClass("/")}`}>
                  <Button className="nav-link" type="link" href="/">
                    Beranda
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/kategori")}`}>
                  <Button className="nav-link" type="link" href="/kategori">
                    Kategori
                  </Button>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className={`nav-item`}>
                  <Button className="nav-link" type="link" href="/" isExternal>
                    Jadi Mitra Kami
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/login")}`}>
                  <Button className="nav-link" type="link" href="/login">
                    Login
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/register")}`}>
                  <Button className="nav-link" type="link" href="/register">
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
