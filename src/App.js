import React from "react";
import "assets/scss/style.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import landingPages from "pages/LandingPages";
import DetailPage from "pages/DetailPage";

function App() {
  return (
    <div className="App">
      <Router>
      <Route exact path="/" component={landingPages} />
        <Route exact path="/properties/:id" component={DetailPage} />
    
      </Router>
    </div>
  );
}

export default App;
