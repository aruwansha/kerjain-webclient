import React, { Component } from "react";
import propTypes from "prop-types";

// parts
import Sidebar from "parts/freelancer/Sidebar";
import Navbar from "parts/freelancer/Navbar";
import Footer from "parts/freelancer/Footer";

export default class MainLayout extends Component {
  render() {
    return (
      <div className="page-top">
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Navbar />
              {this.props.children}
            </div>
            <Footer />
          </div>
        </div>
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up"></i>
        </a>
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: propTypes.node.isRequired,
};
