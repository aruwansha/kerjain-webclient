import React, { Component } from "react";

import Header from "parts/Header";

import Button from "elements/Button";

import { connect } from "react-redux";

import { register } from "store/actions/register";

import { getWithExpiry } from "utils/setExpiryLocalStorage";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        firstname: "",
        lastname: "",
        email: "",
        password1: "",
        password2: "",
        categoryId: "",
      },
      loading: false,
    };

    if (getWithExpiry("token")) return this.props.history.push("/me");

    this.handleChange = this.handleChange.bind(this);

    this._register = this._register.bind(this);
  }

  handleChange(event) {
    this.setState({
      data: { ...this.state.data, [event.target.name]: event.target.value },
    });
  }

  _register = (event) => {
    const { data } = this.state;
    if (
      data.firstname === "" ||
      data.lastname === "" ||
      data.email === "" ||
      data.password1 === "" ||
      data.password2 === "" ||
      data.categoryId === ""
    ) {
      toast.error("Tolong isi dan lengkapi field!", {
        position: toast.POSITION.BOTTOM_CENTER
      });
    } else {
      if (data.password1 !== data.password2) {
        toast.error("Password harus sama!", {
          position: toast.POSITION.BOTTOM_CENTER
        });
      } else {
        const fullname = `${data.firstname} ${data.lastname}`;
        const payload = {
          name: fullname,
          email: data.email,
          password: data.password1,
          categoryId: data.categoryId,
        };
        this.props.register(payload, this.props);
      }
    }
    event.preventDefault();
  };

  loader = () => {
    this.setState({ loading: true });

    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  };

  render() {
    const { loading } = this.state;

    return (
      <>
        <Header {...this.props} isCentered />
        <section className="container" style={{ marginBottom: 80 }}>
          <div className="wrapper" style={{ margin: "50px 0" }}>
            <div className="row">
              <div className="col-lg-6 pd-right-50 pd-left-50" style={{ margin: "0 auto" }}>
                <div className="form-group">
                  <label htmlFor="">Nama Depan</label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstname"
                    placeholder="Masukkan nama depan..."
                    onChange={this.handleChange}
                    autoComplete="off"
                  />
                </div>
              </div>
            </div>
            <form onSubmit={this._register}>
              <div className="row">
                <div className="col-lg-6 pd-right-50 pd-left-50" style={{ margin: "0 auto" }}>
                  <div className="form-group">
                    <label htmlFor="">Nama Belakang</label>
                    <input
                      type="text"
                      className="form-control"
                      name="lastname"
                      placeholder="Masukkan nama belakang..."
                      onChange={this.handleChange}
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 pd-right-50 pd-left-50" style={{ margin: "0 auto" }}>
                  <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Masukkan email..."
                      onChange={this.handleChange}
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 pd-right-50 pd-left-50" style={{ margin: "0 auto" }}>
                  <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password1"
                      placeholder="Masukkan password..."
                      onChange={this.handleChange}
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 pd-right-50 pd-left-50" style={{ margin: "0 auto" }}>
                  <div className="form-group">
                    <label htmlFor="">Ulang Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password2"
                      placeholder="Masukkan password kembali..."
                      onChange={this.handleChange}
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 pd-right-50 pd-left-50" style={{ margin: "0 auto" }}>
                  <div className="form-group">
                    <label htmlFor="">Kategori yang dipiih</label>
                    <select
                      name="categoryId"
                      className="form-control"
                      onChange={this.handleChange}
                      value={this.state.categoryId}
                    >
                      <option value="" selected disabled>
                        Pilih kategori...
                      </option>
                      <option value="605b580db4a8e60af44d4530">
                        Technology & Programming
                      </option>
                      <option value="605b580db4a8e60af44d4531">
                        Graphic & Design
                      </option>
                      <option value="605b580db4a8e60af44d4532">
                        Write & Translate
                      </option>
                      <option value="605b580db4a8e60af44d4533">
                        Video & Animation
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 pd-right-50 pd-left-50" style={{ margin: "0 auto" }}>
                  <Button
                    className="btn btn-light px-4"
                    type="link"
                    href="/login"
                  >
                    Login
                  </Button>
                  <Button
                    className="btn px-4 ml-3"
                    type="submit"
                    onClick={this.loader}
                    disabled={loading}
                    isPrimary
                  >
                    {loading && (
                      <span
                        className="spinner-border spinner-border-sm"
                        style={{ margin: "0 1.5em" }}
                      ></span>
                    )}
                    {!loading && <span>Register</span>}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  login: state.login,
});

export default connect(mapStateToProps, { register })(RegisterPage);
