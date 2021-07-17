import React from "react";
import { Route } from "react-router-dom";

// Auth
import RegisterPage from "pages/freelancer/RegisterPage";
import LoginPage from "pages/LoginPage";

export default function Auth() {
  return (
    <>
      <Route path="/register/freelancer" component={RegisterPage} />
      <Route path="/login" component={LoginPage} />
    </>
  );
}
