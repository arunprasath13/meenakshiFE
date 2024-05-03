import React from "react";
import { Link } from "react-router-dom";
import {useForm} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
import Layout from "../Components/Layout";
const Login = () => {
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
        <h2 className="form__header">Log In</h2>
        <p className="form__para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
          tempor incididunt ut labore aliqua.
        </p>
        <div className="form__box">
          <div className="email__box">
            <label>Email Id</label>
            <input type="textbox" placeholder="Enter here" {...register("Email")}/>
            <p style={{color:"red"}}>{errors.Email?.message}</p>
          </div>
          <div className="password__box">
            <label>Password</label>
            <input type="password" placeholder="Password" {...register("Password")}/>
            <p style={{color:"red"}}>{errors.Password?.message}</p>
          </div>
          <div className="forgot__link">
            <Link to="/auth/forgotPassword">Forgot Password</Link>
          </div>
          <button className="btn" type="submit">
            Login
          </button>
        </div>
        <div
          className="right__account"
          style={{ marginTop: "40px", textAlign: "center" }}
        >
          <p>
           Need an account <Link to="/auth/signup">Continue</Link>
          </p>
        </div>
      </form>
    </Layout>
  );
};

export default Login;
