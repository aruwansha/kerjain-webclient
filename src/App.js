// package
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { ToastContainer } from "react-toastify";

// routing
import Auth from "routes/Auth";
import ServiceUser from "routes/ServiceUser";
import Freelancer from "routes/Freelancer";

// styling
import "assets/scss/style.scss";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Auth />
        <ServiceUser />
        <Freelancer />
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
