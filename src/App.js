import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LandingPage from "pages/LandingPage";
import CategoryPage from "pages/CategoryPage";
import FreelancerPage from "pages/FreelancerPage";
import RegisterPage from "pages/RegisterPage";
import LoginPage from "pages/LoginPage";
import Checkout from "pages/Checkout";
import MePage from "pages/MePage";
import RequestPage from "pages/RequestPage";
import RequestDetailPage from "pages/RequestDetailPage";
import OrderPage from "pages/OrderPage";
import OrderDetailPage from "pages/OrderDetailPage";
import ChatPage from "pages/ChatPage";
import ChatDetailPage from "pages/ChatDetailPage";

import { ToastContainer } from 'react-toastify';

import "assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/category" component={CategoryPage} />
        <Route exact path="/freelancer/:id" component={FreelancerPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/me" component={MePage} />
        <Route exact path="/request" component={RequestPage} />
        <Route exact path="/request/:id" component={RequestDetailPage} />
        <Route exact path="/order" component={OrderPage} />
        <Route exact path="/order/:id" component={OrderDetailPage} />
        <Route exact path="/chat" component={ChatPage} />
        <Route exact path="/chat/:id" component={ChatDetailPage} />
      </Router>

      <ToastContainer />
    </div>
  );
}

export default App;
