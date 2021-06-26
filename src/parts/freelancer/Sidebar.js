import React from "react";

import Button from "elements/Button";

export default function sidebar() {
  return (
    <ul
      className="navbar-nav bg-secondary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="/freelancer"
      >
        <div className="sidebar-brand-icon">
          <img src="/" alt="" />
        </div>
      </a>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item">
        <Button type="link" className="nav-link" href="/freelancer">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dasbor</span>
        </Button>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Menu</div>

      <li className="nav-item">
        <Button type="link" className="nav-link" href="/freelancer/service">
          <i className="fas fa-fw fa-handshake"></i>
          <span>Layanan Milikmu</span>
        </Button>
      </li>

      <li className="nav-item">
        <Button type="link" className="nav-link" href="/freelancer/request">
          <i className="fas fa-fw fa-briefcase"></i>
          <span>Request Tersedia</span>
        </Button>
      </li>

      <li className="nav-item">
        <Button type="link" className="nav-link" href="/freelancer/chat">
          <i className="far fa-fw fa-comments"></i>
          <span>Chat</span>
          {/* <span className="badge badge-danger badge-counter"></span> */}
        </Button>
      </li>

      <li className="nav-item">
        <Button type="link" className="nav-link" href="/freelancer/order">
          <i className="fas fa-fw fa-shopping-cart"></i>
          <span>Orderan</span>
        </Button>
      </li>

      <hr className="sidebar-divider d-none d-md-block" />

      <div className="sidebar-heading">Pengaturan</div>

      <li className="nav-item">
        <a
          Button
          type="link"
          href="#/"
          className="nav-link collapsed cursor-pointer noselect"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i className="fas fa-fw fa-cog"></i>
          <span>Pengaturan</span>
        </a>
        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div className="bg-white py-2 collapse-inner rounded">
            <Button
              type="link"
              className="collapse-item text-secondary"
              href="/freelancer/setting/edit-profile"
            >
              Edit Profil
            </Button>
          </div>
        </div>
      </li>

      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle"></button>
      </div>
    </ul>
  );
}
