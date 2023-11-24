import React, { Fragment } from "react";
import classes from "./sign-in.module.css";
import Form from "../UI/Form";
import Input from "../UI/Input";
import logoImg from '../../assets/logo.svg'
const SignIn = () => {
  return (
    <Fragment>
      <Form>
        <img src={logoImg} alt="" />
        <h1>Login</h1>
        <Input  type="text"> Email address *</Input>
        <Input  type="password"> Password *</Input>
        <div className={classes.remember}>
          <input type="checkbox" name="" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <button>Login</button>
        <div className={classes.links}>
            <a href="">Forgot password?</a>
            <a href="">Don't have an account? Sign Up</a>
        </div>
      </Form>
    </Fragment>
  );
};

export default SignIn;
