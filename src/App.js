import React, { Fragment, useEffect, useState } from "react";

import { Switch, Route } from "react-router-dom";
import Header from "./ui/Header";

import Authenticate from "./Authenticate";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    auth: state.firebase.auth,
    profile: state.firebase.profile,
});

const App = ({ auth, profile }) => {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        if (auth.isLoaded === true && auth.isEmpty === false) {
            setAuthenticated(true);
            history.push("/dashboard")
        }
        if (auth.isLoaded === true && auth.isEmpty === true) {
            setAuthenticated(false);
            history.push("/")
        }
    });

    return (
        <Fragment>
            {authenticated && <Header />}

            {!authenticated && <Authenticate />}

            {authenticated && (
                <Switch>
                    <Route path={"/dashboard"}>Dashboard</Route>

                    <Route path={"/test"}>Test</Route>
                </Switch>
            )}
        </Fragment>
    );
};

export default connect(mapStateToProps)(App);
