import React from "react";

import { getWithExpiry } from "utils/setExpiryLocalStorage";

export default function navbar() {
  const logout = () => {
    localStorage.clear();
  };
  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <button
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-3"
        >
          <i className="fa fa-bars"></i>
        </button>

        <ul className="navbar-nav ml-auto">
          <div className="topbar-divider d-none d-sm-block"></div>

          <li className="nav-item dropdown no-arrow">
            <a
              className="nav-link dropdown-toggle"
              href="#/"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                {getWithExpiry("name")}
              </span>
            </a>
            <div
              className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="userDropdown"
            >
              <a
                className="dropdown-item"
                href="#/"
                data-toggle="modal"
                data-target="#changePasswordModal"
              >
                <i className="fas fa-edit fa-sm fa-fw mr-2 text-gray-400"></i>
                Edit Password
              </a>
              <a
                className="dropdown-item"
                href="#/"
                data-toggle="modal"
                data-target="#logoutModal"
              >
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>

      <div
        className="modal fade"
        id="logoutModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Yakin akan keluar?
              </h5>
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              Pilih "logout" untuk mengakhiri sesi sekarang.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                type="button"
                data-dismiss="modal"
              >
                Batal
              </button>
              <a className="btn btn-primary" onClick={logout} href="/">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="changePasswordModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalLabel">
                Edit Password
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form action="/change-password?_method=PUT" method="POST">
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="inputServiceTitle">Password Lama</label>
                  <input
                    type="password"
                    className="form-control"
                    name="old_password"
                    placeholder="Masukkan password lama..."
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputServiceDescription">Password Baru</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password1"
                    placeholder="Masukkan password baru..."
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputAccountHolder">
                    Ulangi Password Baru
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="password2"
                    placeholder="Masukkan kembali password baru..."
                    autoComplete="off"
                    required
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Batal
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Ubah
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
