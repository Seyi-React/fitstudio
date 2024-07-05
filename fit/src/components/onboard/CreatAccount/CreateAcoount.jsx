import React from "react";
import style from "./createaccount.module.css";
import google from "../../../assets/Google.png";
import { Link ,useNavigate} from "react-router-dom";


const CreateAcoount = () => {
    const navigate = useNavigate();

    const handleNext = () => {
       navigate("/details")
    }
  return (
    <div style={{ background: "" }}>
      <div className={style.size}>
        <div className={style.account_div}>
          <div>
            <h3>Create an account</h3>
            <p>Enter your email to sign up for this app</p>
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
              <button className={style.continue} onClick={handleNext}>Continue</button>
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
              Already have an account? <Link to="/login" className={style.link}>Login</Link>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAcoount;
