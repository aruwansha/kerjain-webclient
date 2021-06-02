import React from "react";

import Button from "elements/Button";

import BrandIcon from "parts/BrandIcon";

export default function Header(props) {
  return (
    <header className="spacing-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <BrandIcon style={{marginRight: 30}} />
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Button className="nav-link" type="link" href="/">
                  Beranda
                </Button>
              </li>
              <li className="nav-item">
                <Button className="nav-link" type="link" href="/kategori">
                  Kategori
                </Button>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Button className="nav-link" type="link" href="/">
                  Jadi Mitra Kami
                </Button>
              </li>
              <li className="nav-item">
                <Button className="nav-link" type="link" href="/login">
                  Login
                </Button>
              </li>
              <li className="nav-item">
                <Button className="nav-link" type="link" href="/register">
                  Register
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
