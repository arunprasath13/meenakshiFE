import React from "react";
import Layout from "../Components/Layout";
import {useForm} from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
const ForgotPassword = () => {
  const schema = yup.object().shape({
    email:yup.string().required()
  })

  const {register,handleSubmit,formState:{errors}} = useForm({
    resolver : yupResolver(schema)
  });
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <Layout>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="form__header">Forgot Password</h2>
        <p className="form__para">
          Enter your registered email and get reset password link option
        </p>
        <div className="form__box">
          <div className="email__box">
            <label>Email Id</label>
            <input
              type="textbox"
              placeholder="Enter here"
              {...register("email")}              
            />
            <p style={{color:"red"}}>{errors?.email?.message}</p>
          </div>
          <button className="btn" style={{ fontSize: "15px" }} type="submit">
            Continue
          </button>
        </div>
        <div
          className="right__account"
          style={{ marginTop: "40px", textAlign: "center" }}
        >
          <p>
            Already have an account? <Link to="/">Continue</Link>
          </p>
        </div>
      </form>
    </Layout>
  );
};

export default ForgotPassword;
