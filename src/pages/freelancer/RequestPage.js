// package
import React, { Component } from "react";
import { connect } from "react-redux";

// parts
import RequestContent from "parts/freelancer/RequestContent";

// action from redux
import { fetchPage } from "store/actions/page";

// utilities
import { getWithExpiry } from "utils/setExpiryLocalStorage";

class RequestPage extends Component {
  componentDidMount() {
    document.title = "Freelancer | Request";
    window.scroll(0, 0);

    if (!getWithExpiry("token")) return this.props.history.push("/");

    if (getWithExpiry("level") !== "freelancer") {
      return this.props.history.push("/");
    }
    if (!this.props.page.requests)
      this.props.fetchPage(
        `freelancer/requests`,
        "requests",
        getWithExpiry("token")
      );
  }

  render() {
    const { page } = this.props;
    if (!page.hasOwnProperty("requests"))
      return (
        <>
          <div className="loader-sm" style={{ left: "58%" }}></div>
          <div className="d-none d-md-block d-large-block">
            <div className="loader" style={{ marginLeft: 90 }}></div>
          </div>
        </>
      );
    return <RequestContent data={page} />;
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(RequestPage);
