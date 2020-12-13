import React, { Fragment} from "react";

import { Switch, Route } from "react-router-dom";
import Header from "./ui/Header";
import Typography from "@material-ui/core/Typography";



const App = () => {


    return (
        <Fragment>

            <Header />

            <Switch>
                <Route path={"/"}>
                    TEST
                </Route>


            </Switch>



        </Fragment>
    );
};

export default App;
