import React, { useState } from "react";
import styles from "./Role.module.css";
import {useNavigate} from "react-router-dom"

const Role = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate() 

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
       navigate("/level")
  }
  const handleBack = () => {
    navigate("/details")
}
  return (
    <div className={styles.role}>
        <button onClick={handleBack}> back</button>
      <div>
        <h3>Select Your Role</h3>
        <small>What do you want with Fitstudio</small>
      </div>

      <div className={styles.optionsContainer}>
        <div
          className={`${styles.option} ${
            selectedOption === "member" ? styles.selected : ""
          }`}
          onClick={() => handleSelect("member")}
        >
          <div className={styles.optionText}>
            <h4>Fitness Member</h4>
            <small>I want to train to be fit</small>
          </div>
          <div
            className={`${styles.circle} ${
              selectedOption === "member" ? styles.checked : ""
            }`}
          />
        </div>

        <div
          className={`${styles.option} ${
            selectedOption === "tutor" ? styles.selected : ""
          }`}
          onClick={() => handleSelect("tutor")}
        >
          <div className={styles.optionText}>  <h4>Fitness Tutor</h4>
            <small>I help in training people</small></div>
          <div
            className={`${styles.circle} ${
              selectedOption === "tutor" ? styles.checked : ""
            }`}
          />
        
        </div>
        <button className={styles.continue} onClick={handleNext}>Continue</button>
      </div>
    </div>
  );
};

export default Role;
