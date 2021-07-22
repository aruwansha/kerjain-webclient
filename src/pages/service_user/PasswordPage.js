import React, { Component } from "react";

import Header from "parts/service_user/Header";
import Password from "parts/service_user/PasswordContent";

import { getWithExpiry } from "utils/setExpiryLocalStorage";

import "react-toastify/dist/ReactToastify.min.css";

export default class PasswordPage extends Component {
  constructor(props) {
    super(props);

    if (!getWithExpiry("token")) return this.props.history.push("/");

    if (getWithExpiry("level") !== "service_user") {
      return this.props.history.push("/freelancer");
    }
  }

  render() {
    return (
      <>
        <Header {...this.props} />
        <Password />
      </>
    );
  }
}
