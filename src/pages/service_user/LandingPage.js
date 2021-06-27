import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "parts/service_user/Header";

import MostPicked from "parts/service_user/MostPicked";
import HighRated from "parts/service_user/HighRated";
import Footer from "parts/service_user/Footer";

import { fetchPage } from "store/actions/page";

import { getWithExpiry } from "utils/setExpiryLocalStorage";

class LandingPage extends Component {
  componentDidMount() {
    document.title = "KerjaIn | Solusi Kebutuhan Anda";
    window.scroll(0, 0);

    if (getWithExpiry("token")) return this.props.history.push("/me");
    if (!this.props.page.landingPage)
      this.props.fetchPage(`user/landing-page`, "landingPage");
  }

  render() {
    const { page } = this.props;
    if (!page.hasOwnProperty("landingPage"))
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
        <MostPicked data={page.landingPage.mostPicked} />
        <HighRated data={page.landingPage.highRated} />
        <Footer></Footer>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(LandingPage);
