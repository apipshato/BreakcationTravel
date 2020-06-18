import React from "react";
import "assets/scss/style.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import landingPage from "pages/landingPages";

function App() {
  return (
    <div className="App">
      <Router ><Route Path="/" component={landingPage}></Route></Router>
    </div>
  );
}

export default App;
