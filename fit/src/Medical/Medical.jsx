import React from "react";
import style from "./medical.module.css"

import { Link ,useNavigate} from "react-router-dom";


const Medical = () => {
    const navigate = useNavigate();

    const handleNext = () => {
       navigate("/details")
    }
  return (
    <div style={{ background: "" }}>
      <div className={style.size}>
        <div className={style.account_div}>
          <div>
            <h3>Any Medical History</h3>
            <p>Let us know if you any medical history</p>
            <div className={style.input}>
              <input
                type="email"
                name=""
                id="email"
                placeholder="Medical type e g Asthma"
              />
              <textarea
                type="password"
                name=""
                id="password"
                placeholder="Describe your medical details here"
                style={{height:"130px"}}
              />
              <button className={style.continue} onClick={handleNext}>Continue</button>
            </div>
          </div>
          {/* <div className={style.or}>
            <div className={style.dash}></div>
            <small>or</small>
            <div className={style.dash}></div>
          </div> */}
          {/* <div>
            <div className={style.google}>
              <img src={google} alt="" />
              <small>Google</small>
            </div>
            <small className={style.account}>
              Already have an account? <Link to="/login" className={style.link}>Login</Link>
            </small>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Medical;
