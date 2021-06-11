import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "parts/Header";

import MostPicked from "parts/MostPicked";
import HighRated from "parts/HighRated";
import Me from "parts/Me";
import Footer from "parts/Footer";

import { fetchPage } from "store/actions/page";

import { getWithExpiry } from "utils/setExpiryLocalStorage";


class MePage extends Component {
  componentDidMount() {
    window.title = "KerjaIn | Beranda";
    window.scroll(0, 0);

    console.log(localStorage)

    if (!getWithExpiry("token")) return this.props.history.push("/")

    if (!this.props.page.me) this.props.fetchPage(`/landing-page/me`, "me", getWithExpiry("token"));
  }

  render() {
    const { page } = this.props;
    if (!page.hasOwnProperty("me")) return null;

    return (
      <>
        <Header {...this.props} />
        <MostPicked data={page.me.mostPicked} />
        <HighRated data={page.me.highRated} />
        <Me data={page.me.category} />
        <Footer></Footer>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.login,
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(MePage);
