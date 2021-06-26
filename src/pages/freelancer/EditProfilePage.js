// package
import React, { Component } from "react";
import { connect } from "react-redux";

// parts
import EditProfileContent from "parts/freelancer/EditProfileContent";

// action from redux
import { fetchPage } from "store/actions/page";

// utilities
import { getWithExpiry } from "utils/setExpiryLocalStorage";

class EditProfilePage extends Component {
  componentDidMount() {
    document.title = "Freelancer | Edit Profile";
    window.scroll(0, 0);

    if (!getWithExpiry("token")) return this.props.history.push("/");

    if (!this.props.page.profile)
      this.props.fetchPage(
        `freelancer/profile`,
        "profile",
        getWithExpiry("token")
      );
  }

  render() {
    const { page } = this.props;
    if (!page.hasOwnProperty("profile")) return null;
    return <EditProfileContent data={page} />;
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(EditProfilePage);
