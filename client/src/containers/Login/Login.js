import React from "react";
// import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";

import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

import ValidatedTextField from '../../components/ValidatedTextField';
import {
    emailTextField,
    passwordTextField
} from "../../components/ValidatedTextField/ValidatedTextField";

import { firebaseAuth, firebaseDB } from "../../config/firebase";

import './styles.css';
import logo from '../../images/boomtown-logo.svg';
import bottomLeft from '../../images/home-bl.svg';
import topRight from '../../images/home-tr.svg';


// this is undefined when passing it from LoginContainer. figure out why and move it back into Container.....
console.log(this.props); // returns undefined
const newUser = e => {
    e.preventDefault();
    console.log("user added to database");
    firebaseAuth
        .createUserWithEmailAndPassword("test3@test.com", "testtest")
        .then(user =>
            firebaseDB.ref(`users/${user.uid}`).set({
                email: "test3@test.com",
                fullname: "test test3",
                bio: "test bio 3"
            })
        );
};

const Login = ({ login }) => (
    <div className="page login">
        <div className="logo">
            <img src={logo} alt="Boomtown Logo" />
        </div>
        <div className="topRight">
            <img src={topRight} alt="Sky" />
        </div>
        <div className="bottomLeft">
            <img src={bottomLeft} alt="City" />
        </div>
        <div className="cardContainer">
            <Paper zDepth={5}>
                <div className="formContainer">
                    <form onSubmit={login} autoComplete="off">
                        <Field name="email" component={emailTextField} />
                        <Field name="password" component={passwordTextField} />
                        <RaisedButton
                            className="enterButton"
                            primary
                            fullWidth
                            type="submit"
                        >
                            Enter
                        </RaisedButton>
                    </form>
                </div>
            </Paper>
        </div>
    </div>
);

// Login.propTypes = {
//     login: PropTypes.func.isRequired
// };

// const loginForm = reduxForm({
//     form: "loginForm"
// })(Login);

export default Login;
