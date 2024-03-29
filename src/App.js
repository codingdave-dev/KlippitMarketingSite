import React, { Fragment } from "react";

import { Switch, Route } from "react-router-dom";
import Header from "./ui/Header";
import Home from "./pages/Home";
import Newsletter from "./ui/Newsletter";
import Footer from "./ui/Footer";
import WhyKlippit from "./pages/WhyKlippit";
import Demo from "./pages/Demo";
import Press from "./pages/Press";

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
        <Route exact path={"/demo"}>
          <Demo />
        </Route>
        <Route exact path={"/press"}>
          <Press />
        </Route>
      </Switch>
      <Newsletter />
      <Footer />
    </Fragment>
  );
};

export default App;
