import React from "react";
import { Route } from "react-router-dom";

// Service User
import LandingPage from "pages/service_user/LandingPage";
import CategoryPage from "pages/service_user/CategoryPage";
import FreelancerPage from "pages/service_user/FreelancerPage";
import RegisterPage from "pages/service_user/RegisterPage";
import Checkout from "pages/service_user/Checkout";
import MePage from "pages/service_user/MePage";
import RequestPage from "pages/service_user/RequestPage";
import RequestDetailPage from "pages/service_user/RequestDetailPage";
import OrderPage from "pages/service_user/OrderPage";
import OrderDetailPage from "pages/service_user/OrderDetailPage";
import ChatPage from "pages/service_user/ChatPage";
import ChatDetailPage from "pages/service_user/ChatDetailPage";
import ProfilePage from "pages/service_user/ProfilePage";

export default function ServiceUser() {
  return (
    <>
      <Route exact path="/" component={LandingPage} />
      <Route path="/category" component={CategoryPage} />
      <Route exact path="/freelancer/:id" component={FreelancerPage} />
      <Route path="/register" component={RegisterPage} />
      <Route path="/checkout" component={Checkout} />
      <Route exact path="/me" component={MePage} />
      <Route exact path="/request" component={RequestPage} />
      <Route path="/request/:id" component={RequestDetailPage} />
      <Route exact path="/order" component={OrderPage} />
      <Route path="/order/:id" component={OrderDetailPage} />
      <Route exact path="/chat" component={ChatPage} />
      <Route path="/chat/:id" component={ChatDetailPage} />
      <Route path="/profile" component={ProfilePage} />
    </>
  );
}
