import React from "react";
import { Link } from "react-router-dom";
import * as yup from "yup"
import {useForm} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import Layout from "../Components/Layout";
const Signup = () => {

  const schema = yup.object().shape({
    Email:yup.string().required(),
    Password:yup.string().min(4).max(10).required()
  })

  const {register,handleSubmit,formState:{errors}} = useForm({
    resolver : yupResolver(schema)
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Layout>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="form__header">Sign Up</h2>
        <p className="form__para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
          tempor incididunt ut labore aliqua.
        </p>
        <div className="form__box">
          <div className="email__box">
            <label>Email Id</label>
            <input type="textbox" placeholder="Enter here" {...register("Email")}/>
            <p style={{"color":"red"}}>{errors?.Email?.message}</p>
          </div>
          <div className="password__box">
            <label>Password</label>
            <input type="password" placeholder="Password" {...register("Password")}/>
            <p style={{"color":"red"}}>{errors?.Password?.message}</p>
          </div>
          <div className="forgot__link">
            <Link to="/auth/ForgotPassword">Forgot Password</Link>
          </div>
          <button className="btn">Sign In</button>
        </div>
      </form>
      <div
        className="right__account"
        style={{ marginTop: "40px", textAlign: "center" }}
      >
        <p>
          Already have an account? <Link to="/auth/login">Continue</Link>
        </p>
      </div>
    </Layout>
  );
};

export default Signup;
