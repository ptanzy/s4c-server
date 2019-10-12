import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Nav from "./components/Nav/index";
import Footer from "../src/components/Footer/index";
import NoMatch from "./pages/NoMatch/index";
import AboutS4C from "./pages/AboutS4C/index";
import AboutUs from "./pages/AboutUs/index";
import Give from "./pages/Give/index";
import Index from "./pages/Index/index";
import ContactUs from "./pages/ContactUs/index";
import Partner from "./pages/Partner/index";

function App() {
  return (
    <Router>
      <div>
        <Nav links={[{loc: "/", text: "HOME"},{loc: "/abouts4c", text: "ABOUT S4C"},{loc: "/aboutus", text: "ABOUT US"},{loc: "/give", text: "GIVE"},{loc: "/contactus", text: "CONTACT US"},{loc: "/partner", text: "PARTNER"}]} />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/abouts4c" component={AboutS4C} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/give" component={Give} />
          <Route exact path="/contactus" component={ContactUs} />
          <Route exact path="/partner" component={Partner} />
          {/* <Route exact path="/saved" component={Saved} /> */}
          <Route component={NoMatch} />
        </Switch>
        <Footer>
          <div class="prim-text" id="od-quote">Legacy is based on the impact you make and the moments you etch into memory
            <br/>-Odlin Sainvilus
          </div>
          <div id="social-links">
            <a href="https://www.facebook.com/styles4confidence" target="_blank"><i class="fab fa-facebook ftr"></i></a>
            <a href="https://www.instagram.com/styles_4_confidence/" target="_blank"><i class="fab fa-instagram ftr"></i></a>
            <a href="https://twitter.com/s4c_usa" target="_blank"><i class="fab fa-twitter ftr"></i></a>            
          </div>
        </Footer>
      </div>
    </Router>
  );
}

export default App;
