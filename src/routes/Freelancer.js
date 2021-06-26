import React from "react";
import { Route } from "react-router-dom";

// layout
import FreelancerLayout from "pages/freelancer/MainLayout";

// Freelancer
import DashboardPage from "pages/freelancer/DashboardPage";
import ServicePage from "pages/freelancer/ServicePage";
import RequestPage from "pages/freelancer/RequestPage";
import RequestDetailPage from "pages/freelancer/RequestDetailPage";
import ChatPage from "pages/freelancer/ChatPage";
import ChatDetailPage from "pages/freelancer/ChatDetailPage";
import OrderPage from "pages/freelancer/OrderPage";
import OrderDetailPage from "pages/freelancer/OrderDetailPage";
import EditProfilePage from "pages/freelancer/EditProfilePage";


export default function Freelancer() {
  return (
    <>
      <Route
        path="/freelancer"
        render={({ match: { url } }) => (
          <>
            <FreelancerLayout>
              <Route path={`${url}/`} component={DashboardPage} exact />
              <Route path={`${url}/service`} component={ServicePage} />
              <Route exact path={`${url}/request`} component={RequestPage} />
              <Route path={`${url}/request/:id`} component={RequestDetailPage} />
              <Route exact path={`${url}/chat`} component={ChatPage} />
              <Route path={`${url}/chat/:id`} component={ChatDetailPage} />
              <Route exact path={`${url}/order`} component={OrderPage} />
              <Route path={`${url}/order/:id`} component={OrderDetailPage} />
              <Route path={`${url}/setting/edit-profile`} component={EditProfilePage} />
            </FreelancerLayout>
          </>
        )}
      />
    </>
  );
}
