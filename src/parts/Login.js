import React from "react";

import Button from "elements/Button";

import "../elements/Form/InputText/index.scss";

export default function Login() {
  return (
    <section className="container" style={{ margin: "auto" }}>
      <div className="wrapper" style={{ margin: "140px 0" }}>
        <div className="row">
          <div className="col-6" style={{ margin: "0 auto" }}>
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input type="text" className="form-control" />
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
            <Button className="btn px-4" type="Button" isPrimary>
              Login
            </Button>
            <Button
              className="btn btn-outline-light px-4 ml-3"
              type="link"
              href="/register"
            >
              Register
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
