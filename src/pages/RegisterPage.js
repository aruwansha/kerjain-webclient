import React, { Component } from "react";

import Header from "parts/Header";
import Register from "parts/Register";

export default class RegisterPage extends Component {
  render() {
    return (
      <>
        <Header isCentered />
        <Register />
      </>
    );
  }
}
