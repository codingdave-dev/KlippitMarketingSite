import React, {Fragment} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";


const useStyles = makeStyles((theme) => ({
    error: {
        color: theme.palette.error.main,
        fontWeight: 300
    }
}));

const TextInput = ({input, label, type, variant, required, inputAdornment, meta:{touched, error}}) => {
    const classes = useStyles();
    // const theme = useTheme();
    return (
        <Fragment>
            <TextField
                {...input}
                required={required}
                label={label}
                type={type}
                variant={variant}
                fullWidth
                size={'small'}
                InputProps={inputAdornment ? {
                    startAdornment: <InputAdornment position="start">{inputAdornment}</InputAdornment>,
                } : null}
            />
            {touched && error && (
                <Typography variant={'subtitle1'} className={classes.error}>{error}</Typography>
            )}
        </Fragment>

    );
};

export default TextInput;