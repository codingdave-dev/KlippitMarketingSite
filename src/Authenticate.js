import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import LoginForm from "./ui/forms/auth/LoginForm";
import ResetPasswordForm from "../src/ui/forms/auth/ResetPasswordForm";
import RegisterForm from "../src/ui/forms/auth/RegisterForm";
import { connect } from "react-redux";

import logo from "./assets/logo/logo.jpg";

const useStyles = makeStyles((theme) => ({
  logoContainer: {
    marginTop: "2em",
  },
  logo: {
    width: "300px",
    [theme.breakpoints.down("xs")]: {
      width: "250px",
    },
  },
}));

const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile,
});

const Index = ({ auth, profile }) => {
  const classes = useStyles();
  // const theme = useTheme();

  const [forgotPassword, setForgotPassword] = useState(false);
  const [login, setLogin] = useState(true);

  return (
    <Grid item container>
      <Grid item container justify={"center"} className={classes.logoContainer}>
        <img src={logo} alt="YardLove Logo" className={classes.logo} />
      </Grid>

      <Grid item container justify={"center"}>
        <Grid item lg={3} md={4} sm={5} xs={8}>
          {!forgotPassword && login && (
            <LoginForm
              setForgotPassword={setForgotPassword}
              setLogin={setLogin}
            />
          )}
          {!forgotPassword && !login && <RegisterForm setLogin={setLogin} />}
          {forgotPassword && (
            <ResetPasswordForm setForgotPassword={setForgotPassword} />
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default connect(mapStateToProps)(Index);
