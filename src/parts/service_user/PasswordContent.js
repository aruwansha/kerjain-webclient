import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { getWithExpiry } from "utils/setExpiryLocalStorage";

import { editPassword } from "store/actions/freelancer/password";

export default function Navbar() {
  const dispatch = useDispatch();

  const [password, setPassword] = useState({
    old_password: "",
    password1: "",
    password2: "",
  });

  const handlePassword = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };

  const edit_password = () => {
    if (
      password.old_password === "" ||
      password.password1 === "" ||
      password.password2 === ""
    ) {
      toast.error("Tolong isi dan lengkapi field!", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else if (password.password1 !== password.password2) {
      toast.error("Tolong isi password baru yang sama!", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else {
      const payload = {
        old_password: password.old_password,
        new_password: password.password1,
      };
      dispatch(editPassword(payload, getWithExpiry("token")));
    }
  };

  return (
    <>
      <section className="container" style={{ margin: "auto" }}>
        <h4 className="mb-3">Profile</h4>
        <div className="wrapper" style={{ margin: "30px 0" }}>
          <form>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="inputServiceTitle">Password Lama</label>
                <input
                  type="password"
                  className="form-control"
                  name="old_password"
                  placeholder="Masukkan password lama..."
                  onChange={handlePassword}
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
                  onChange={handlePassword}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputAccountHolder">Ulangi Password Baru</label>
                <input
                  type="password"
                  className="form-control"
                  name="password2"
                  placeholder="Masukkan kembali password baru..."
                  onChange={handlePassword}
                  autoComplete="off"
                  required
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  onClick={edit_password}
                  className="btn btn-primary"
                  data-dismiss="modal"
                >
                  Ubah
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
