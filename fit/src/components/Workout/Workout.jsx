import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./workout.module.css"

const Workout = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const handleBack = () => {
    navigate("/work")
  }

  const handleNext = () => {
    navigate("/medical")
  }
  return (
    <div>
      <div className={styles.role}>
        <button onClick={handleBack}> back</button>
        <div>
          <h3>Select Your Workout Schedule</h3>
          <p className={styles.how} style={{textAlign:"center"}}>How often do you train</p>
        </div>

        <div className={styles.optionsContainer}>
          <div
            className={`${styles.option} ${
              selectedOption === "beginner" ? styles.selected : ""
            }`}
            onClick={() => handleSelect("beginner")}
          >
            <div className={styles.optionText}>
              <h4>Morning Session</h4>
              <small>I havent trianed at all</small>
            </div>
            <div
              className={`${styles.circle} ${
                selectedOption === "beginner" ? styles.checked : ""
              }`}
            />
          </div>

          <div
            className={`${styles.option} ${
              selectedOption === "intermediate" ? styles.selected : ""
            }`}
            onClick={() => handleSelect("intermediate")}
          >
            <div className={styles.optionText}>
              {" "}
              <h4>Afternnon Session</h4>
              <small>I trianed 1-2 in a week</small>
            </div>
            <div
              className={`${styles.circle} ${
                selectedOption === "intermediate" ? styles.checked : ""
              }`}
            />
          </div>
          <div
            className={`${styles.option} ${
              selectedOption === "Advanced" ? styles.selected : ""
            }`}
            onClick={() => handleSelect("Advanced")}
          >
            <div className={styles.optionText}>
              {" "}
              <h4>Evening Session</h4>
              <small>I train more 4 times a week</small>
            </div>
            <div
              className={`${styles.circle} ${
                selectedOption === "Advanced" ? styles.checked : ""
              }`}
            />
          </div>
          <button className={styles.continue} onClick={handleNext}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Workout;
