import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import LandingPage from "pages/LandingPage";

import "assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={LandingPage} />
        <Route path="/kategori" />
        <Route path="/login" />
        <Route path="/register" />
      </Router>
    </div>
  );
}

export default App;
