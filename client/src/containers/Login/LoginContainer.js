import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from 'react-router-dom';
import { reduxForm, formValueSelector, getFormValues } from "redux-form";
import { connect } from "react-redux";
import { firebaseAuth, firebaseDB } from "../../config/firebase";

import Login from "./Login";

class LoginContainer extends Component {
    handleSubmit = e => {
        e.preventDefault();
        console.log('triggered login')
        const { email, password } = this.props.loginFormValues;
        firebaseAuth
            .signInWithEmailAndPassword(email, password)
            .catch((err) => {
                return console.log(err);
            });
    };

    render() {
        const { auth } = this.props;
        if (auth) {
            return (
                <Redirect to={'/'} />
            );
        }
        return (<Login login={this.handleSubmit} />);
    }
}

const loginForm = reduxForm({
    form: "loginForm",
})(LoginContainer);

// const values = formValueSelector("loginForm");
const mapStateToProps = state => ({
    loginFormValues: getFormValues("loginForm")(state),
    auth: state.auth.user
});
export default connect(mapStateToProps)(loginForm);
