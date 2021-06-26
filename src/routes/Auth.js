import React from "react";
import { Route } from "react-router-dom";

// Auth
import LoginPage from "pages/LoginPage";

export default function Auth() {
  return (
    <>
      <Route path="/login" component={LoginPage} />
    </>
  );
}
