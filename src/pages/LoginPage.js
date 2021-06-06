import React, { Component } from "react";

import Header from "parts/Header";
import Login from "parts/Login";

export default class LoginPage extends Component {
  render() {
    return (
      <>
        <Header isCentered />
        <Login />
      </>
    );
  }
}
