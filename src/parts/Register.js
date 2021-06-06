import React from "react";

import Button from "elements/Button";

import "../elements/Form/InputText/index.scss";

export default function Registe() {
  return (
    <section className="container" style={{ marginBottom: 80 }}>
      <div className="wrapper" style={{ margin: "50px 0" }}>
        <div className="row">
          <div className="col-6" style={{ margin: "0 auto" }}>
            <div className="form-group">
              <label htmlFor="">Nama Lengkap</label>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6" style={{ margin: "0 auto" }}>
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input type="email" className="form-control" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6" style={{ margin: "0 auto" }}>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input type="password" className="form-control" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6" style={{ margin: "0 auto" }}>
            <div className="form-group">
              <label htmlFor="">Tanggal Lahir</label>
              <input type="date" className="form-control" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6" style={{ margin: "0 auto" }}>
            <div className="form-group">
              <label htmlFor="">Alamat</label>
              <input type="text" className="form-control" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6" style={{ margin: "0 auto" }}>
            <div className="form-group">
              <label htmlFor="">No. Hp</label>
              <input type="number" className="form-control" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6" style={{ margin: "0 auto" }}>
            <div className="form-group">
              <label htmlFor="">Kategori yang dipiih</label>
              <select name="cars" className="form-control">
                <option value="605b580db4a8e60af44d4530">Technology & Programming</option>
                <option value="605b580db4a8e60af44d4531">Graphic & Design</option>
                <option value="605b580db4a8e60af44d4532">Write & Translate</option>
                <option value="605b580db4a8e60af44d4533">Video & Animation</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6" style={{ margin: "0 auto" }}>
            <Button
              className="btn btn-outline-light px-4"
              type="link"
              href="/login"
            >
              Login
            </Button>
            <Button className="btn px-4 ml-3 " type="Button" isPrimary>
              Register
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
