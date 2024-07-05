import React, { useEffect, useState } from "react";
import check from "../../assets/Frame 1321319874.png";
import style from "./setup.module.css";
import { useNavigate } from "react-router-dom";

const SetUp = () => {

  const [seconds, setSeconds] = useState(10); // Set initial countdown seconds
  const navigate = useNavigate();

  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(timer); // Cleanup the timer on component unmount
    } else {
      // navigate('/home'); // Redirect to the home page when the timer reaches 0
    }
  }, [seconds, navigate]);
  return (
    <div className={style.set}>
      <div>
        <img src={check} alt="" />
        <p>
          Congratulation, Your Profile <br />
          has been set up!

         
        </p>
        <small style={{color:"#5D6B78"}}>Redirecting in <span style={{color:"#03B252"}}>{seconds}...</span></small>
      </div>
    </div>
  );
};

export default SetUp;

