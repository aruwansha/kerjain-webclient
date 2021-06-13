import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "parts/Header";
import Banner from "elements/Banner";
import ServiceFreelancer from "parts/ServiceFreelancer";
import AboutFreelancer from "parts/AboutFreelancer";
import ReviewFreelancer from "parts/ReviewFreelancer";
import Footer from "parts/Footer";

import { checkoutBooking } from "store/actions/checkout";
import { fetchPage } from "store/actions/page";


class FreelancerPage extends Component {
  componentDidMount() {
    window.title = "KerjaIn | Beranda";
    window.scroll(0, 0);

    if (!this.props.page[this.props.match.params.id])
      this.props.fetchPage(
        `/freelancer/${this.props.match.params.id}`,
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
