import React, { Fragment} from "react";

import { Switch, Route } from "react-router-dom";
import Header from "./ui/Header";



const App = () => {


    return (
        <Fragment>

            <Header />

            <Switch>
                <Route path={"/"}>HOME</Route>


            </Switch>



        </Fragment>
    );
};

export default App;
