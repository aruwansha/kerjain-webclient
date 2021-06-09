import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LandingPage from "pages/LandingPage";
import CategoryPage from "pages/CategoryPage";
import FreelancerPage from "pages/FreelancerPage";
import Checkout from "pages/Checkout";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";

import { ToastContainer } from 'react-toastify';

import "assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/kategori" component={CategoryPage} />
        <Route exact path="/freelancer/:id" component={FreelancerPage} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
      </Router>

      <ToastContainer />
    </div>
  );
}

export default App;
