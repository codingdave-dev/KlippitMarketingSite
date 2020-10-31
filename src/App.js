import React, {Fragment} from 'react';


import {
  Switch,
  Route,
} from "react-router-dom";
import Header from "./ui/Header";


const App = () => {


  return (
    <Fragment>
        <Header/>
      <Switch>
        <Route exact path={'/'}>Home</Route>

        <Route path={'/test'}>Test</Route>
      </Switch>
    </Fragment>
  );
}

export default App;
