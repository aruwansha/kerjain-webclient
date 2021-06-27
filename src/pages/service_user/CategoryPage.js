import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "parts/service_user/Header";
import Category from "parts/service_user/Category";
import Footer from "parts/service_user/Footer";

import { fetchPage } from "store/actions/page";

class CategoryPage extends Component {
  componentDidMount() {
    document.title = "KerjaIn | Kategori";
    window.scroll(0, 0);

    if (!this.props.page.categoryPage)
      this.props.fetchPage(`user/category-page`, "categoryPage");
  }
  render() {
    const { page } = this.props;
    if (!page.hasOwnProperty("categoryPage"))
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
