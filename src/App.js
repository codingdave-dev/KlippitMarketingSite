import React, { Fragment} from "react";

import { Switch, Route } from "react-router-dom";
import Header from "./ui/Header";
import Typography from "@material-ui/core/Typography";
import Home from "./pages/Home";



const App = () => {


    return (
        <Fragment>

            <Header />

            <Switch>
                <Route exact path={"/"}>
                    <Home/>
                </Route>


            </Switch>



        </Fragment>
    );
};

export default App;
