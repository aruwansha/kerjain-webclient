import React, { Component } from "react";

import Header from "parts/service_user/Header";
import Profile from 'parts/service_user/ProfileContent'

import { connect } from "react-redux";

import { fetchPage } from "store/actions/page";

import { getWithExpiry } from "utils/setExpiryLocalStorage";

import "react-toastify/dist/ReactToastify.min.css";

class ProfilePage extends Component {
  constructor(props) {
    super(props);

    if (!getWithExpiry("token")) return this.props.history.push("/");

    if (getWithExpiry("level") !== "service_user") {
      return this.props.history.push("/freelancer");
    }

    if (!this.props.page.profilePage)
      this.props.fetchPage(
        `user/profile/get`,
        "profilePage",
        getWithExpiry("token")
      );
  }

  render() {
    const { page } = this.props;

    if (!page.hasOwnProperty("profilePage"))
      return (
        <>
          <div className="loader-sm"></div>
          <div className="d-none d-md-block d-lg-block">
            <div className="loader"></div>
          </div>
        </>
      );

    return (
      <>
        <Header {...this.props} />
        <Profile data={page.profilePage}/>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(
  ProfilePage
);
