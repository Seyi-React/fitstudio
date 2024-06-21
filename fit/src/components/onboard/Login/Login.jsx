import React from 'react'
import style from "./Login.module.css"
import google from "../../../assets/Google.png"
import {Link } from "react-router-dom"

const Login = () => {
  return (
    <div>
       <div style={{ background: "" }}>
      <div className={style.size}>
        <div className={style.account_div}>
          <div>
            <h3>Login</h3>
            <p>Enter your details to login</p>
            <div className={style.input}>
              <input
                type="email"
                name=""
                id="email"
                placeholder="Enter email address"
              />
              <input
                type="password"
                name=""
                id="password"
                placeholder="Create Password"
              />
              <button className={style.continue}>Login</button>
              <Link className={style.forget} to="/forget">Forget Password</Link>
            </div>
          </div>
          <div className={style.or}>
            <div className={style.dash}></div>
            <small>or</small>
            <div className={style.dash}></div>
          </div>
          <div>
            <div className={style.google}>
              <img src={google} alt="" />
              <small>Google</small>
            </div>
            <small className={style.account}>
              Don't have an account? <Link to="/" className={style.link}>Sign Up</Link>
            </small>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login
