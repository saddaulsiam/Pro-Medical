import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Register = () => {
  const { handleGoogleSignIn, handleUserRegister, } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  console.log(email, password);

  const handleRegister = () => {
    handleUserRegister(email, password);
  };

  return (
    <div className="div d-flex justify-content-center align-items-center shadow border-3 background ">
      <div className="shadow border-3 m-5 p-5 bg-white login-form">
        <div className="d-d-flex justify-content-center">
          <h2>Register Form</h2>
        </div>
        <div className="form-input">
          <input onChange={handleEmail} className="mt-2 p-2 border-0 input-field" type="email" placeholder="Email" />
          <br />
          <input onChange={handlePassword} className="mt-2 p-2 border-0 input-field" type="password" placeholder="Password" />
          <br />
          <div className="login-register-btn mt-4 d-flex justify-content-center">
            <button onClick={handleRegister} className="btn btn-primary rounded-pill btn-regular">Register</button>
          </div>
          <div className="d-flex justify-content-center mt-2">
            <Link to="/login" className="">Already Registered</Link>
          </div>
        </div>
        <div className="login-btn mt-4">
          <button onClick={handleGoogleSignIn} className="btn btn-warning btn-regular rounded-pill"><i className="fab fa-google"></i> Google sign in </button>
        </div>
      </div>
    </div >
  );
};

export default Register;