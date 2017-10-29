import React from "react";
// import PropTypes from "prop-types";
import TextField from "material-ui/TextField";

import { blueGrey900 } from "material-ui/styles/colors";

const styles = {
    fieldStyle: {
        width: "100%"
    },
    errorStyle: {
        color: blueGrey900,
        position: "absolute",
        bottom: "-0.42rem"
    },
    underlineStyle: {
        borderColor: blueGrey900
    }
};

// const ValidatedTextField = ({ label, type }) => (
//     <TextField
//         type={type}
//         style={styles.fieldStyle}
//         hintText={label}
//         floatingLabelText={label}
//         errorStyle={styles.errorStyle}
//         underlineFocusStyle={styles.underlineStyle}
//     />
// );

export const emailTextField = field => (
    <TextField
        type="email"
        style={styles.fieldStyle}
        hintText="Email"
        floatingLabelText="Email"
        errorStyle={styles.errorStyle}
        underlineFocusStyle={styles.underlineStyle}
        {...field.input}
    />
);

export const passwordTextField = field => (
    <TextField
        type="password"
        style={styles.fieldStyle}
        hintText="Password"
        floatingLabelText="Password"
        errorStyle={styles.errorStyle}
        underlineFocusStyle={styles.underlineStyle}
        {...field.input}
    />
);
