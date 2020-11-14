import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextInput from "../../../common/form/TextInput";
import { Field, reduxForm } from "redux-form";
import Grid from "@material-ui/core/Grid";

import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { login } from "../../../store/actions/authActions/authActions";
import Typography from "@material-ui/core/Typography";

const actions = {
  login,
};

const useStyles = makeStyles((theme) => ({
  loginContainer: {
    paddingLeft: "0.7em",
    paddingRight: "0.7em",
  },
  error: {
    color: theme.palette.error.main,
    fontWeight: 500,
  },
}));

const LoginForm = ({
  login,
  handleSubmit,
  error,
  submitting,
  setForgotPassword,
    setLogin
}) => {
  const classes = useStyles();
  // const theme = useTheme();
  return (
    <form autoComplete={"off"} onSubmit={handleSubmit(login)}>
      <Grid container direction={"column"} className={classes.loginContainer}>
        <Grid item style={{ marginTop: "1em" }}>
          <Field
            label={"Email"}
            name={"email"}
            type={"text"}
            variant={"outlined"}
            component={TextInput}
          />
        </Grid>
        <Grid item style={{ marginTop: "1.5em" }}>
          <Field
            label={"Password"}
            name={"password"}
            type={"password"}
            variant={"outlined"}
            component={TextInput}
          />
        </Grid>
        {error && (
          <Grid item style={{ marginTop: "0.5em" }}>
            <Typography variant={"subtitle1"} className={classes.error}>
              {error}
            </Typography>
          </Grid>
        )}

        <Grid item style={{ marginTop: "1.2em", marginBottom: "1em" }}>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            type={"submit"}
            disabled={submitting}
          >
            LOGIN
          </Button>
        </Grid>
        <Grid item>
          <Grid item container direction={'column'} alignItems={"center"}>
            <Grid item>
              <Typography
                variant={"caption"}
                onClick={() => setForgotPassword(true)}
                style={{ cursor: "pointer" }}
              >
                Forgot Password?
              </Typography>
            </Grid>
            {/*DELETE AFTER*/}
            <Grid item>
              <Typography
                  variant={"caption"}
                  onClick={() => setLogin(false)}
                  style={{ cursor: "pointer" }}
              >
                Register?
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default connect(
  null,
  actions
)(reduxForm({ form: "loginForm" })(LoginForm));
