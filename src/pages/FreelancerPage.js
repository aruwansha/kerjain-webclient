import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "parts/Header";
import Banner from "elements/Banner";
import ServiceFreelancer from "parts/ServiceFreelancer";
import AboutFreelancer from "parts/AboutFreelancer";
import Footer from "parts/Footer";

import freelancerPage from "json/freelancerPage.json";

import { checkoutBooking } from "store/actions/checkout";

class FreelancerPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props} />
        <Banner image={`/${freelancerPage.imgUrl}`} />
        <ServiceFreelancer data={freelancerPage}  startBooking={this.props.checkoutBooking}/>
        <AboutFreelancer data={freelancerPage} />
        <Footer />
      </>
    );
  }
}

export default connect(null, { checkoutBooking })(FreelancerPage);
