import React, { Fragment } from "react";

import { Switch, Route } from "react-router-dom";
import Header from "./ui/Header";
import Typography from "@material-ui/core/Typography";
import Home from "./pages/Home";
import Newsletter from "./ui/Newsletter";
import Footer from "./ui/Footer";
import WhyKlippit from "./pages/WhyKlippit";

const App = () => {
  return (
    <Fragment>
      <Header />

      <Switch>
        <Route exact path={"/"}>
          <Home />
        </Route>
          <Route exact path={"/whyKlippit"}>
              <WhyKlippit />
          </Route>
      </Switch>
        <Newsletter/>
        <Footer/>
    </Fragment>
  );
};

export default App;
