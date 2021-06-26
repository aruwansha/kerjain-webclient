// package
import React, { Component } from "react";
import { connect } from "react-redux";

// parts
import ServiceContent from "parts/freelancer/ServiceContent";

// action from redux
import { fetchPage } from "store/actions/page";

// utilities
import { getWithExpiry } from "utils/setExpiryLocalStorage";

class DashboardPage extends Component {
  componentDidMount() {
    document.title = "Freelancer | Layanan";
    window.scroll(0, 0);

    if (!getWithExpiry("token")) return this.props.history.push("/");

    if (!this.props.page.services)
      this.props.fetchPage(
        `freelancer/services`,
        "services",
        getWithExpiry("token")
      );
  }

  render() {
    const { page } = this.props;
    if (!page.hasOwnProperty("services")) return null;
    return <ServiceContent data={page} />;
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(DashboardPage);
