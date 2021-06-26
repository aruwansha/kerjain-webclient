import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "parts/service_user/Header";

import Request from "parts/service_user/Request";
import MostPicked from "parts/service_user/MostPicked";
import HighRated from "parts/service_user/HighRated";
import Me from "parts/service_user/Me";
import Footer from "parts/service_user/Footer";

import { fetchPage } from "store/actions/page";

import { getWithExpiry } from "utils/setExpiryLocalStorage";


class MePage extends Component {
  componentDidMount() {
    window.title = "KerjaIn | Beranda";
    window.scroll(0, 0);

    if (!getWithExpiry("token")) return this.props.history.push("/")

    if (!this.props.page.me) this.props.fetchPage(`user/landing-page/me`, "me", getWithExpiry("token"));
  }

  render() {
    const { page } = this.props;
    if (!page.hasOwnProperty("me")) return null;

    return (
      <>
        <Header {...this.props} />
        <Request />
        <MostPicked data={page.me.mostPicked} />
        <HighRated data={page.me.highRated} />
        <Me data={page.me.category} />
        <Footer></Footer>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(MePage);
