import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "parts/Header";
import Category from "parts/Category";
import Footer from "parts/Footer";

import { fetchPage } from "store/actions/page";

class CategoryPage extends Component {
  componentDidMount() {
    window.title = "KerjaIn | Beranda";
    window.scroll(0, 0);

    if (!this.props.page.landingPage)
      this.props.fetchPage(
        `https://kerjain-webservice.herokuapp.com/api/v1/user/category-page`,
        "categoryPage"
      );
  }
  render() {
    const { page } = this.props;
    if (!page.hasOwnProperty("categoryPage")) return null;

    return (
      <>
        <Header {...this.props} />
        <Category data={page.categoryPage.categories} />
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(CategoryPage);
