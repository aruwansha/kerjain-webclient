import React, { Component } from "react";

import Header from "parts/Header";
import Banner from "elements/Banner";
import ServiceFreelancer from "parts/ServiceFreelancer";
import AboutFreelancer from "parts/AboutFreelancer";
import Footer from "parts/Footer";

import freelancerPage from "json/freelancerPage.json";

export default class FreelancerPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props} />
        <Banner image={`/${freelancerPage.imgUrl}`} />
        <ServiceFreelancer data={freelancerPage} />
        <AboutFreelancer data={freelancerPage} />
        <Footer />
      </>
    );
  }
}
