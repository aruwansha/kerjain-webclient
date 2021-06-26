import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "parts/service_user/Header";
import Banner from "elements/Banner";
import ServiceFreelancer from "parts/service_user/ServiceFreelancer";
import AboutFreelancer from "parts/service_user/AboutFreelancer";
import ReviewFreelancer from "parts/service_user/ReviewFreelancer";
import Footer from "parts/service_user/Footer";

import { checkoutBooking } from "store/actions/checkout";
import { fetchPage } from "store/actions/page";


class FreelancerPage extends Component {
  componentDidMount() {
    window.title = "KerjaIn | Beranda";
    window.scroll(0, 0);

    if (!this.props.page[this.props.match.params.id])
      this.props.fetchPage(
        `user/freelancer/${this.props.match.params.id}`,
        this.props.match.params.id
      );
  }
  render() {
    const { page, match } = this.props;
    if (!page[match.params.id]) return null;

    return (
      <>
        <Header {...this.props} />
        <Banner image="https://source.unsplash.com/random" isExternal />
        <ServiceFreelancer data={page[match.params.id]}  startBooking={this.props.checkoutBooking}/>
        <AboutFreelancer data={page[match.params.id]} />
        <ReviewFreelancer data={page[match.params.id]} />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { checkoutBooking, fetchPage })(FreelancerPage);
