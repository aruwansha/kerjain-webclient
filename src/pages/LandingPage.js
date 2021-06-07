import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "parts/Header";

import MostPicked from "parts/MostPicked";
import HighRated from "parts/HighRated";
import Footer from "parts/Footer";

import { fetchPage } from "store/actions/page";

class LandingPage extends Component {
  componentDidMount() {
    window.title = "KerjaIn | Beranda";
    window.scroll(0, 0);

    if (!this.props.page.landingPage)
      this.props.fetchPage(
        `https://kerjain-webservice.herokuapp.com/api/v1/user/landing-page`,
        "landingPage"
      );
  }

  render() {
    const { page } = this.props;
    if (!page.hasOwnProperty("landingPage")) return null;

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
