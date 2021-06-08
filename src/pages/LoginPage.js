import React, { Component } from "react";

import Header from "parts/Header";

import Button from "elements/Button";

import { connect } from "react-redux";

import { login } from "store/actions/login";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: "",
        password: "",
      },
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      data: { ...this.state.data, [event.target.name]: event.target.value },
    });
  }

  _login = () => {
    const { data } = this.state;
    const payload = {
      email: data.email,
      password: data.password,
    };
    this.props.login(payload);
  };
  render() {
    return (
      <>
        <Header isCentered />
        <section className="container" style={{ margin: "auto" }}>
          <div className="wrapper" style={{ margin: "140px 0" }}>
            <div className="row">
              <div className="col-6" style={{ margin: "0 auto" }}>
                <div className="form-group">
                  <label htmlFor="">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6" style={{ margin: "0 auto" }}>
                <div className="form-group">
                  <label htmlFor="">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6" style={{ margin: "0 auto" }}>
                <Button
                  className="btn px-4"
                  type="Button"
                  onClick={this._login}
                  isPrimary
                >
                  Login
                </Button>
                <Button
                  className="btn btn-light px-4 ml-3"
                  type="link"
                  href="/register"
                >
                  Register
                </Button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  login: state.login,
});

export default connect(mapStateToProps, { login })(LoginPage);
