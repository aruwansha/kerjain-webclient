import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faHandshake,
  faBriefcase,
  faComments,
  faShoppingCart,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

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
          <FontAwesomeIcon className="fa-fw mr-1" icon={faTachometerAlt} />
          <span>Dasbor</span>
        </Button>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Menu</div>

      <li className="nav-item">
        <Button type="link" className="nav-link" href="/freelancer/service">
          <FontAwesomeIcon className="fa-fw mr-1" icon={faHandshake} />
          <span>Layanan Milikmu</span>
        </Button>
      </li>

      <li className="nav-item">
        <Button type="link" className="nav-link" href="/freelancer/request">
          <FontAwesomeIcon className="fa-fw mr-1" icon={faBriefcase} />
          <span>Request Tersedia</span>
        </Button>
      </li>

      <li className="nav-item">
        <Button type="link" className="nav-link" href="/freelancer/chat">
          <FontAwesomeIcon className="fa-fw mr-1" icon={faComments} />
          <span>Chat</span>
        </Button>
      </li>

      <li className="nav-item">
        <Button type="link" className="nav-link" href="/freelancer/order">
          <FontAwesomeIcon className="fa-fw mr-1" icon={faShoppingCart} />
          <span>Orderan</span>
        </Button>
      </li>

      <hr className="sidebar-divider d-none d-md-block" />

      <div className="sidebar-heading">Pengaturan</div>

      <li className="nav-item">
        <a
          type="link"
          href="#/"
          className="nav-link collapsed cursor-pointer noselect"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <FontAwesomeIcon className="fa-fw mr-1" icon={faCog} />
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
