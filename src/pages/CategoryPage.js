import React, { Component } from "react";

import Header from "parts/Header";
import Category from "parts/Category";
import Footer from "parts/Footer";

import categoryPage from 'json/categoryPage.json'

export default class CategoryPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props} />
        <Category data={categoryPage.categories} />
        <Footer />
      </>
    );
  }
}
