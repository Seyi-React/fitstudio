import React from "react";
import style from "./createaccount.module.css";
import google from "../../assets/Google.png";

const CreateAcoount = () => {
  return (
    <div style={{ background: "" }}>
      <div className={style.size}>
        <div className={style.account_div}>
          <div>
            <h3>Create an account</h3>
            <p>Enter your email to sign up for this app</p>
            <div className={style.input}>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter email address"
              />
              <input
                type="password"
                name=""
                id=""
                placeholder="Create Password"
              />
              <button className={style.continue}>Continue</button>
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
            <p className={style.account}>Already have an account? Login</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAcoount;
