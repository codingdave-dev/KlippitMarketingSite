import React, {Fragment} from 'react';
import {makeStyles} from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

import {DatePicker} from "@material-ui/pickers";



const useStyles = makeStyles((theme) => ({
    error: {
        color: theme.palette.error.main,
        fontWeight: 300
    }
}));

const DatePickerInput = ({ input:{onBlur, value, ...inputProps}, meta:{submitting, touched, error}, ...others}) => {
    const classes = useStyles();
    // const theme = useTheme();

    const onChange = date => {
        Date.parse(date) ? inputProps.onChange(date.toISOString()) : inputProps.onChange(null);

    };

    return (
        <Fragment>
            <DatePicker
                {...inputProps}
                {...others}
                format="dd/MM/yyyy"
                value={value ? new Date(value) : null}
                disabled={submitting}
                onBlur={() => onBlur(value ? new Date(value).toISOString() : null)}
                error={error && touched}
                onChange={onChange}
            />
            {touched && error && (
                <Typography variant={'subtitle1'} className={classes.error}>{error}</Typography>
            )}
        </Fragment>

    );
};

export default DatePickerInput;