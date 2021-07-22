import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import Button from "elements/Button";
import { editProfile } from "store/actions/profile";

import { formatDate } from "utils/formatDate";
import { getWithExpiry } from "utils/setExpiryLocalStorage";

export default function ProfileContent({ data }) {
  const dispatch = useDispatch();

  const [profile, setProfile] = useState({
    firstname: data.name.split(" ")[0],
    lastname: data.name.split(" ")[1],
    email: data.email,
    address: data.address,
    birthdate: data.birthdate,
    phone: data.phone,
  });

  const handleProfile = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const edit_profile = () => {
    if (
      profile.firstname === "" ||
      profile.lastname === "" ||
      profile.email === "" ||
      profile.address === "" ||
      profile.birthdate === "" ||
      profile.phone === ""
    ) {
      toast.error("Tolong isi dan lengkapi field!", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else {
      const payload = {
        name: `${profile.firstname} ${profile.lastname}`,
        email: profile.email,
        address: profile.address,
        birthdate: profile.birthdate,
        phone: profile.phone,
      };
      dispatch(editProfile(payload, getWithExpiry("token")));
    }
  };

  return (
    <section className="container" style={{ margin: "auto" }}>
      <h4 className="mb-3">Profile</h4>
      <div className="wrapper" style={{ margin: "30px 0" }}>
        <form>
          <div className="row">
            <div
              className="col-lg-6 pd-right-50 pd-left-50"
              style={{ margin: "0 auto" }}
            >
              <div className="form-group">
                <label htmlFor="">Nama Depan</label>
                <input
                  type="text"
                  className="form-control"
                  name="firstname"
                  placeholder="Masukkan nama..."
                  defaultValue={data.name.split(" ")[0]}
                  onChange={handleProfile}
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-6 pd-right-50 pd-left-50"
              style={{ margin: "0 auto" }}
            >
              <div className="form-group">
                <label htmlFor="">Nama Belakang</label>
                <input
                  type="text"
                  className="form-control"
                  name="lastname"
                  placeholder="Masukkan nama..."
                  defaultValue={data.name.split(" ")[1]}
                  onChange={handleProfile}
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-6 pd-right-50 pd-left-50"
              style={{ margin: "0 auto" }}
            >
              <div className="form-group">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder="Masukkan email..."
                  defaultValue={data.email}
                  onChange={handleProfile}
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-6 pd-right-50 pd-left-50"
              style={{ margin: "0 auto" }}
            >
              <div className="form-group">
                <label htmlFor="">Alamat</label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  placeholder="Masukkan alamat..."
                  defaultValue={data.address}
                  onChange={handleProfile}
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-6 pd-right-50 pd-left-50"
              style={{ margin: "0 auto" }}
            >
              <div className="form-group">
                <label htmlFor="">Tanggal Lahir</label>
                <input
                  type="date"
                  className="form-control"
                  name="birthdate"
                  placeholder="Masukkan tanggal lahir..."
                  defaultValue={formatDate(data.birthdate)}
                  onChange={handleProfile}
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-6 pd-right-50 pd-left-50"
              style={{ margin: "0 auto" }}
            >
              <div className="form-group">
                <label htmlFor="">No. HP</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  placeholder="Masukkan No.Hp..."
                  defaultValue={data.phone}
                  onChange={handleProfile}
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-6 pd-right-50 pd-left-50"
              style={{ margin: "0 auto" }}
            >
              <button
                className="btn btn-primary px-4"
                type="button"
                onClick={edit_profile}
                isPrimary
              >
                Ubah
              </button>
              <Button type="link" className="btn btn-light px-4 ml-3" href="/">
                Kembali
              </Button>
              <Button type="link" href="/change-password" className="ml-4">
                Edit Password
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
