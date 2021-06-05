import React, { Component } from "react";

import Header from "parts/Header";

import MostPicked from "parts/MostPicked";
import HighRated from "parts/HighRated";
import Footer from "parts/Footer";

import landingPage from "json/landingPage.json";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props} />
        <MostPicked data={landingPage.mostPicked} />
        <HighRated data={landingPage.highRated} />
        <Footer></Footer>
      </>
    );
  }
}
