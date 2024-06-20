import React from "react";
import style from "./createaccount.module.css";

const CreateAcoount = () => {
  return (
    <div style={{ background: "#F4F7FA" }}>
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
            <input type="password" name="" id="" placeholder="Create Password" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAcoount;
