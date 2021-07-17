import React, { Component } from "react";

import Button from "elements/Button";

import { connect } from "react-redux";

import { register } from "store/actions/freelancer/register";

import { getWithExpiry } from "utils/setExpiryLocalStorage";

import { toast } from "react-toastify";

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
    console.log(data);
    if (
      data.firstname === "" ||
      data.lastname === "" ||
      data.email === "" ||
      data.password1 === "" ||
      data.password2 === "" ||
      data.categoryId === ""
    ) {
      toast.error("Tolong isi dan lengkapi field!", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else {
      if (data.password1 !== data.password2) {
        toast.error("Password harus sama!", {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      } else {
        const payload = {
          firstname: data.firstname,
          lastname: data.lastname,
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
      <div className="bg-gradient-primary">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xl-6 col-lg-12 col-md-9"
              style={{ margin: "50px auto" }}
            >
              <div className="card o-hidden border-0 shadow-lg">
                <div className="card-header">
                  <div className="row">
                    <div className="col-11">
                      <div className="text-center">
                        <h1 className="h3 text-gray-900 my-2 brand-text-icon ml-5">
                          Kerja<span style={{ color: "#313f72" }}>In</span>
                        </h1>
                      </div>
                    </div>
                    <div
                      className="col"
                      style={{ borderLeft: "1px solid #c4c4c4" }}
                    >
                      <a href="https://kerjain.herokuapp.com/">
                        <i
                          className="fas fa-sign-out-alt mt-3"
                          style={{ fontSize: "1.1rem" }}
                        ></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="p-5">
                        <form onSubmit={this._register}>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="firstname"
                              placeholder="Masukkan nama depan..."
                              onChange={this.handleChange}
                              autoComplete="off"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="lastname"
                              placeholder="Masukkan nama belakang"
                              onChange={this.handleChange}
                              autoComplete="off"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="email"
                              placeholder="Masukkan email..."
                              onChange={this.handleChange}
                              autoComplete="off"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="password"
                              className="form-control"
                              name="password1"
                              placeholder="Masukkan password..."
                              onChange={this.handleChange}
                              autoComplete="off"
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="password"
                              className="form-control"
                              name="password2"
                              placeholder="Masukkan password kembali..."
                              onChange={this.handleChange}
                              autoComplete="off"
                            />
                          </div>
                          <div className="form-group">
                            <select
                              name="categoryId"
                              className="form-control"
                              onChange={this.handleChange}
                              value={this.state.categoryId}
                              defaultValue={"DEFAULT"}
                            >
                              <option value="DEFAULT" disabled>
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
                          <Button
                            className="btn btn-primary btn-user btn-block"
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
                          <Button
                            className="btn btn-secondary btn-user btn-block"
                            type="link"
                            href="/login"
                          >
                            Login
                          </Button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  register: state.register,
});

export default connect(mapStateToProps, { register })(RegisterPage);
