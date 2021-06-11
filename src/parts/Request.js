import React from "react";

import Button from "elements/Button";

import Banner from "elements/Banner";

import Fade from "react-reveal/Fade";

export default function Request(props) {
  return (
    <section id="request" className="container">
      <Fade bottom>
        <h4>Masukkan Request</h4>
        <div className="row">
          <div className="col-6 pt-5">
            <form action="">
              <div className="form-group">
                <label htmlFor="">Subyek</label>
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  placeholder="Masukkan subyek..."
                  onChange={() => {}}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Deskripsi</label>
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  placeholder="Masukkan deskripsi..."
                  onChange={() => {}}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Budget</label>
                <input
                  type="text"
                  className="form-control"
                  name="budget"
                  placeholder="Masukkan maksimal pengeluaran..."
                  onChange={() => {}}
                />
              </div>
              <Button className="btn px-4" type="submit" isPrimary>
                Buat Request
              </Button>
            </form>
          </div>
          <div className="col">
            <Banner image="https://source.unsplash.com/random" />
          </div>
        </div>
      </Fade>
    </section>
  );
}
